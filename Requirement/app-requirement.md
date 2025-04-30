# ✅ Service Booking App – Feature Checklist

A fullstack application using **ReactJS + NestJS + PostgreSQL**, where users can book services and servitors complete tasks. Admin oversees the platform.

---

## 📦 Core Modules

### ✅ Authentication & User Roles
- [ ] User registration
- [ ] User login (JWT)
- [ ] Password encryption (bcrypt)
- [ ] Forgot/reset password
- [ ] Role-based access control (User, Servitor, Admin)

---

## 👤 User Features
- [ ] View all services
- [ ] Book a service (date, time, address)
- [ ] View my bookings
- [ ] Cancel a booking (with condition)
- [ ] Reschedule a booking
- [ ] View booking status
- [ ] Submit review and rating after service
- [ ] Receive booking PIN
- [ ] Get notification updates

---

## 🛠️ Servitor Features
- [ ] Register as a servitor (pending approval)
- [ ] View assigned bookings
- [ ] Accept/Reject booking (optional)
- [ ] Mark booking as "In Progress"
- [ ] Mark booking as "Completed"
- [ ] View earnings & balance
- [ ] View user feedback and rating
- [ ] Receive deadline notifications and warnings

---

## 🧑‍💼 Admin Features
- [ ] Dashboard with stats (total users, bookings, earnings)
- [ ] Manage users (block/unblock)
- [ ] Manage servitors (approve/reject)
- [ ] Manage services (add/edit/delete)
- [ ] View all bookings
- [ ] View penalties and revenue
- [ ] Export reports (optional CSV)

---

## 🗃️ Booking System
- [ ] Unique order number per booking
- [ ] Auto-generate 6-digit PIN per order
- [ ] Bookings limited to 7:00 AM – 9:30 PM
- [ ] Apply small extension for late jobs
- [ ] Apply penalty after deadline exceeded
- [ ] Booking status: Pending → In Progress → Completed → Cancelled

---

## 🧾 Transaction System
- [ ] Track payment per booking
- [ ] Platform commission (e.g., 5%)
- [ ] Servitor balance updates automatically
- [ ] Admin can view all transactions

---

## 🔔 Notification System
- [ ] User: booking created, accepted, completed
- [ ] Servitor: new job, deadline warning
- [ ] Admin: servitor applied, booking status change
- [ ] Optional: real-time updates with Socket.IO
- [ ] Mark notifications as read/unread

---

## 💬 Review & Feedback
- [ ] Users can submit feedback per booking
- [ ] Star rating (1–5)
- [ ] Admin can view all feedback
- [ ] Servitor can view their feedback

---

## 🖼️ File Upload (Optional)
- [ ] Upload service image/logo
- [ ] Upload user profile picture
- [ ] Upload servitor verification docs

---

## 📅 Availability & Deadlines
- [ ] No same-day bookings after 9:30 PM
- [ ] Servitor can see time left to complete
- [ ] Grace period logic
- [ ] Apply late penalty logic

---

## 📊 Admin Analytics (Optional Advanced)
- [ ] Most popular service
- [ ] Highest earning servitor
- [ ] Monthly booking count
- [ ] Revenue summary
- [ ] Rating stats

---

## 🛠️ Stack
- **Frontend:** ReactJS, Tailwind CSS, Axios, React Router
- **Backend:** NestJS, PostgreSQL, TypeORM, JWT, Multer
- **Other:** Redis (optional), Socket.IO (optional), Nodemailer

---

## 🚀 Deployment (Optional Final Step)
- [ ] Dockerize backend & frontend
- [ ] Deploy backend to Railway/Render/Fly.io
- [ ] Deploy frontend to Vercel/Netlify
- [ ] GitHub Actions CI/CD (optional)

---

**Total Checklist Items: 75+**

Start with MVP: Auth ➝ Booking ➝ Admin ➝ Notifications ➝ Polish UI.
