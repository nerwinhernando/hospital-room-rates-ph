import { Metadata } from 'next';
import RoomRateSubmissionForm from '@/components/RoomRateSubmissionForm';

export const metadata: Metadata = {
  title: 'Submit Hospital Room Rates | Philippines Hospital Search',
  description: 'Contribute to our community by sharing accurate hospital room rates and help fellow patients make informed healthcare decisions across the Philippines.',
  keywords: 'hospital room rates, philippines healthcare, submit rates, hospital prices, medical costs',
  openGraph: {
    title: 'Submit Hospital Room Rates',
    description: 'Help build the most comprehensive hospital rate database in the Philippines',
    type: 'website',
  },
};

export default function SubmitRatesPage() {
  return (
    <div>
      <RoomRateSubmissionForm />
    </div>
  );
}
