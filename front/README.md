
* **Client side**: landing page, login, register, movie list, movie watch page, profile, notifications
* **Admin side**: dashboard with sidebar containing movies, settings, and movie creation (CRUD via static data for now)

---




## 🗂️ Professional Folder Structure (Next.js 13+ with App Router)

```bash
app/
│
├── (auth)/                      # Group auth-related routes
│   ├── login/                   # /login page
│   └── register/                # /register page
│
├── (client)/                   # Group public-facing routes
│   ├── page.tsx                # Landing Page (/)
│   ├── movies/                 # /movies (list)
│   │   └── [id]/               # Dynamic route for watching movie
│   ├── profile/                # /profile
│   └── notifications/          # /notifications
│
├── (admin)/                    # Admin section
│   ├── layout.tsx              # Shared layout with sidebar
│   ├── dashboard/              # /admin/dashboard
│   ├── movies/                 # /admin/movies
│   │   ├── new/                # /admin/movies/new (add movie)
│   │   └── [id]/edit/          # /admin/movies/[id]/edit (edit movie)
│   └── settings/               # /admin/settings
│
├── layout.tsx                  # Root layout (includes global styles)
├── globals.css
└── page.tsx                    # Redirect to /landing or home
```

---

## 📁 Supporting Folders

```bash
components/                     # Reusable UI components
│   ├── ui/                     # Buttons, Inputs, Modals, etc.
│   ├── movies/                 # MovieCard, MovieList, etc.
│   └── layout/                 # Navbar, Sidebar, Footer

lib/                            # Utility functions
│   └── auth.ts                 # Auth helper functions (dummy or future-ready)

data/                           # Static JSON or JS data (fake DB)
│   └── movies.ts               # List of movie objects
│   └── users.ts                # Dummy user data

types/                          # TypeScript interfaces
│   └── movie.ts
│   └── user.ts

context/                        # React Context (Auth, Theme, etc.)

hooks/                          # Custom React hooks

constants/                      # Constants like routes, roles, etc.

public/                         # Static assets like images, icons

styles/                         # Component or layout-specific styles
```

