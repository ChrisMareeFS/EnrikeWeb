import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin-auth');

  if (authCookie?.value !== 'authenticated') {
    redirect('/admin/login');
  }

  return <AdminDashboard />;
}

