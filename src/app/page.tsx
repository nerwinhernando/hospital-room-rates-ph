import HospitalRoomRatesSearchApp from '@/components/HospitalRoomRatesSearchApp'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <ErrorBoundary>
      <HospitalRoomRatesSearchApp />
    </ErrorBoundary>
  )
}