import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';

interface BottomSheetProps {
  children: React.ReactNode;
}

export default function BottomSheetComponent({ children }: BottomSheetProps) {
  const snapPoints = useMemo(() => ['10%', '25%', '50%'], []);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
    >
      {children}
    </BottomSheet>
  )
}