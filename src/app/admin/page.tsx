import SimpleAuth from '@/components/SimpleAdminAuth';
import AdminDashboard from '@/components/AdminDashboard';

export default function AdminPage() {
  return (
    <SimpleAuth>
      <AdminDashboard />
    </SimpleAuth>
  );
}