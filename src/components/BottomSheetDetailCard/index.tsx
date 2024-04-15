import Icon from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';
import { DetailsContainer, DetailsLabel, DetailsValue, DetailsValueWrapper } from './styles';

interface BottomSheetDetailCardProps {
  label: string;
  value: string | number;
  color: string;
  icon: keyof typeof Icon.glyphMap;
}

export default function BottomSheetDetailCard({ label, value, color, icon }: BottomSheetDetailCardProps) {
  const { COLORS } = useTheme()

  return (
    <>
      <DetailsContainer color={color}>
        <DetailsLabel>{label}</DetailsLabel>

        <DetailsValueWrapper>
          <Icon name={icon} size={20} color={COLORS.WHITE} />
          <DetailsValue>
            {value}
          </DetailsValue>
        </DetailsValueWrapper>
      </DetailsContainer>
    </>

  )
}