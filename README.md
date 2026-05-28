# MediNext — Find healthcare. Heal forward.

A sister brand to EduNext. India's directory for **hospitals, doctors, diagnostics labs, and pharmacies**, plus a **Patient Vault** for prescriptions, lab reports, imaging, vaccinations & insurance.

This package is a **production-grade demo** built as a single self-contained HTML file. It runs entirely client-side using React 18 (via Babel-standalone) and Tailwind (via CDN). All data is demo data in `data.js` — designed to map 1:1 to Supabase tables for easy backend wiring later.

---

## How to run

Two options:

**Option 1 — Just open it.** Double-click `index.html` (most modern browsers handle the local file fine). Recommended browser: Chrome / Edge / Safari.

**Option 2 — Local web server (recommended for clean testing).** From this folder:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then open <http://localhost:8000>.

---

## What's in the box

```
medinext/
  index.html      ← single-file React app (UI + routing + logic)
  data.js         ← demo dataset (10 hospitals, 12 doctors, 10 labs, 10 pharmacies, demo patient + vault)
  README.md       ← you are here
```

---

## App map

| Route | Page |
|---|---|
| `#/` | Home with hero, unified search, categories, popular tests, featured doctors & hospitals, vault CTA, trust strip |
| `#/hospitals` | Hospital directory with filters (city, specialty, 24×7 emergency, cashless) |
| `#/doctors` | Doctor directory with filters (city, specialty, max fee, video consult) |
| `#/pathology` | Diagnostics labs with filters (city, 24×7, home collection) |
| `#/pharmacies` | Pharmacies with filters (city, 24×7, home delivery) |
| `#/hospital/:slug` | Hospital detail — about, specialties, facilities, in-house doctors, reviews, call/directions/book/emergency CTAs |
| `#/doctor/:slug` | Doctor detail — about, hospital, languages, reviews, video/in-clinic booking |
| `#/pathology/:slug` | Lab detail — about, popular tests with stable per-test pricing, scans, reviews, home-collection booking |
| `#/pharmacy/:slug` | Pharmacy detail — about, prescription upload dropzone, demo medicine catalogue with discount pricing, reviews |
| `#/vault` | Patient Vault — vitals/allergies/chronic/emergency contact, records by type, share-with-doctor consent flow |
| `#/contact` | Contact form |
| `#/list-with-us` | Listing pitch for facilities |
| `#/privacy` | Privacy & ABDM page |

Hash-based routing means no server is needed and refreshes work. Bad routes show a clean 404.

---

## Highlight features

- **Unified search bar** in the hero with 4 tabs (Doctors / Hospitals / Lab Tests / Pharmacy), city selector, and deep-linked filter params.
- **EduNext-DNA design** — dark hero gradient + light-mode listings (Practo/Apollo trust convention), Montserrat headings + Inter body, soft card shadows, healing emerald + medical blue palette.
- **Patient Vault**
  - 6 demo records (lab report, prescription, imaging, vaccination, insurance)
  - Add record modal + delete-confirm modal
  - "Share with doctor" consent flow (generates an ABDM-style consent-artefact ID, time-boxed: 24h / 3d / 7d)
  - Masked ABHA ID by default with tap-to-reveal
  - Vitals / allergies / chronic conditions / emergency contact
- **Booking modal** with slot picker → patient details → confirmation.
- **Emergency CTA** with pulsing red badge on 24×7 hospitals.
- **Get directions** opens Google Maps with the hospital's address.
- **Reviews block** on every detail page with deterministic demo reviews + rating distribution.
- **Toast notifications** instead of `alert()`/`confirm()`.
- **Modal a11y** — role="dialog", aria-modal, Esc to close, focus on first input.
- **Breadcrumbs** on detail and static pages.
- **Mobile-responsive** (tested down to 360px), bottom-sheet style modals on mobile.
- **Demo build pill** in the hero and accurate stat counts (no fabricated 12,400+ doctors when there are 12).

---

## Wiring to Supabase later (no rewrite)

`data.js` is intentionally shaped to map 1:1 to tables. Replace the file's `window.MEDINEXT_DATA = { ... }` with Supabase queries (or, when porting to Next.js, server components fetching from Supabase).

### Suggested schema

```sql
-- Public read tables
create table hospitals (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text, city text, locality text, address text,
  type text, beds int, established int,
  accreditation text[], rating numeric, reviews int,
  fee_consultation int, emergency_24x7 bool, cashless bool,
  insurance_partners int, specialties text[], facilities text[],
  doctors_count int, image_hue int, about text,
  phone text, email text, website text, whatsapp text,
  price_band text, created_at timestamptz default now()
);
create table doctors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  hospital_id uuid references hospitals(id),
  name text, specialty text, qualification text,
  experience_years int, fee int, city text, locality text,
  rating numeric, reviews int, languages text[], gender text,
  reg_no text, awards text[], available_modes text[],
  next_slot text, image_hue int, about text
);
create table pathology (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text, city text, locality text, address text,
  rating numeric, reviews int,
  home_collection bool, nabl bool, open_24x7 bool,
  report_tat_hours int, popular_tests text[], scans text[],
  starting_price int, image_hue int, phone text, about text
);
create table pharmacies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text, city text, locality text, address text,
  rating numeric, reviews int,
  open_24x7 bool, home_delivery bool, delivery_eta_minutes int,
  online_consult bool, discount_pct int,
  image_hue int, phone text, about text
);

-- Patient-side
create table patients (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id),
  name text, phone text, email text, dob date, gender text,
  blood_group text, height_cm int, weight_kg int,
  allergies text[], chronic text[],
  emergency_contact jsonb,
  abha_id text,            -- store encrypted via pgsodium
  avatar_hue int,
  created_at timestamptz default now()
);

create type vault_record_type as enum
  ('lab_report','prescription','imaging','vaccination','insurance');

create table vault_records (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  type vault_record_type not null,
  title text, source text, record_date date,
  file_kind text, file_path text,            -- Supabase Storage object key
  flagged bool default false, summary text,
  created_at timestamptz default now()
);

create table vault_share_grants (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  grantee_doctor_id uuid references doctors(id),
  record_ids uuid[], expires_at timestamptz,
  revoked_at timestamptz,
  consent_artefact_id text,                   -- mirrors ABDM
  created_at timestamptz default now()
);

create table appointments (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id),
  doctor_id uuid references doctors(id),
  hospital_id uuid references hospitals(id),
  mode text check (mode in ('video','in_clinic')),
  slot_at timestamptz, status text default 'booked',
  consult_fee int, notes text,
  created_at timestamptz default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  target_kind text check (target_kind in ('doctor','hospital','lab','pharmacy')),
  target_id uuid, patient_id uuid references patients(id),
  rating int check (rating between 1 and 5),
  body text, appointment_id uuid references appointments(id),
  created_at timestamptz default now()
);

create table consents (   -- DPDP ledger
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id),
  purpose text, data_categories text[],
  granted_at timestamptz default now(), revoked_at timestamptz,
  version text
);

create table audit_log (  -- append-only
  id bigserial primary key,
  actor_id uuid, action text, target_table text, target_id uuid,
  ts timestamptz default now(), ip inet, user_agent text
);
```

### RLS policies

```sql
-- Directories: anyone can read
alter table hospitals enable row level security;
create policy hospitals_read on hospitals for select to anon using (true);
-- ...same for doctors / pathology / pharmacies

-- Patients can only see/edit their own row
alter table patients enable row level security;
create policy patients_self on patients
  for all using (auth.uid() = auth_user_id) with check (auth.uid() = auth_user_id);

-- Vault: only the owner
alter table vault_records enable row level security;
create policy vault_self on vault_records
  for all using (patient_id in (select id from patients where auth_user_id = auth.uid()));

-- Shared grant lets the grantee doctor read records during validity
create policy vault_shared_read on vault_records for select using (
  id in (
    select unnest(record_ids) from vault_share_grants
     where grantee_doctor_id in (select id from doctors where /* doctor auth */)
       and expires_at > now() and revoked_at is null
  )
);
```

### Storage

- Bucket: `vault`. Path: `{patient_id}/{record_id}/{filename}`.
- Bucket policy: only the owner can read/write; signed URLs auto-expire in 15 minutes.

### Auth

- Use Supabase Auth (phone OTP via MSG91 or Google) for the demo; swap to ABDM ABHA Gateway at GA.
- After signup, insert a row into `patients` keyed by `auth.uid()`.

### Where each demo function maps

| Demo (`AppProvider`) | Production (Supabase) |
|---|---|
| `localStorage` for user | Supabase Auth session |
| `localStorage` for vault | `vault_records` table |
| `signIn()` (loads demo patient) | OAuth / OTP flow + insert into `patients` |
| `vaultAdd()` | `insert into vault_records` + upload file to Storage |
| `vaultRemove()` | `delete from vault_records` |
| `ShareVaultModal` consent generation | `insert into vault_share_grants` + create consent artefact |
| `BookingModal` confirm | `insert into appointments` + Razorpay charge |
| `useRoute()` hash router | Next.js App Router (when migrating to Next.js) |

---

## Testing notes (what was already verified)

Three rounds of testing were run during build:

**Round 1 — headless render across 14 routes.** Zero React errors. All listings, all detail pages, all 404s rendered correctly.

**Round 2 — independent code-review agent pass.** Produced a P0/P1/P2 punch list. All P0 items fixed: shared auth/vault state (Context provider), broken back link (breadcrumbs added), broken Sign-in CTA when signed-in, footer dead links (added Contact/Privacy/List-with-us pages), ABHA exposed in clear (masked with reveal toggle), `Math.random()` in PathologyDetail (memoised), `alert()`/`confirm()` (replaced with toast/modal), missing reviews section (ReviewsBlock added), fake hero stats (replaced with real demo counts).

**Round 3 — final smoke test.** All routes including bad slugs return correct content. Filters work (e.g. `/doctors?city=Bangalore` returns 2 doctors, `/hospitals?city=Delhi` returns 2). Vault flow (signed in) shows 6 records, share & add modals open, ABHA masked by default, navbar shows user name.

---

## Brand / design tokens used

| Token | Value |
|---|---|
| Brand blue | `#0EA5E9` (Tailwind brand-500) |
| Healing emerald | `#10B981` (Tailwind heal-500) |
| Ink (text) | slate scale `#0F172A → #F8FAFC` |
| Hero gradient | radial sky + emerald over `#0F172A` |
| Heading font | Montserrat 600–800 |
| Body font | Inter 400–700 |
| Card radius | `rounded-2xl` (16 px) / `rounded-3xl` for hero blocks |
| Card shadow | layered, soft (`card-soft` utility) |

---

## What I'd ship next (after the demo)

1. **ABDM ABHA Gateway** integration for real authentication.
2. **Doctor portal** — claim profile, manage slots, accept consent grants.
3. **Hospital admin** — bed availability, queue management, cashless approvals.
4. **Pharmacist chat** for the OTC consult feature already in the UI.
5. **Insurance partner deep-links** so cashless approval starts from the listing.
6. **Locality-level filters** (Bandra vs Andheri) — schema already supports it.
7. **Personalised home** when signed in: upcoming appointments, vault recap, refill reminders.
8. **Reviews moderation** with appointment-completed gating.
9. **SEO**: server-rendered (Next.js) so the directory ranks for "best cardiologist in Mumbai" type queries.

---

Built for edu @ EduNext. Ship it.
