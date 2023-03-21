import { View, Text } from 'react-native'
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
export default function OnbardingPage() {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-slate-80">Try Me </StyledText>
    </StyledView>
  )
}