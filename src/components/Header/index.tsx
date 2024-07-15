import { HeaderContainer, HeaderContent } from './styles'
import GithubBlogLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={GithubBlogLogo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
