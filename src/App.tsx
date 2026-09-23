import '@fontsource/roboto/500.css'
import {useNavigate, useLocation} from 'react-router-dom'
import {UiBoxApp} from '@/ui/UiBoxApp'
import {UiAppBar} from '@/ui/UiAppBar'
import {UiToolbar} from '@/ui/UiToolbar'
import {UiBoxLogo} from '@/ui/UiBoxLogo'
import {UiButtonIconMenu} from '@/ui/UiButtonIconMenu'
import {UiButtonIconReset} from '@/ui/UiButtonIconReset'
import {UiBoxPage} from '@/ui/UiBoxPage'
import {ListMenu} from '@/components/ListMenu'
import {PageRenderer} from '@/components/PageRenderer'
import {useBoolean} from '@/hooks/useBoolean'
import {useAnimation} from '@/hooks/useAnimation'
import {usePageForm} from '@/components/ProviderPageForm'

export const App = () => {

  const hook_location = useLocation()
  const hook_navigate = useNavigate()
  const hook_drawer = useBoolean()
  const hook_button_icon_refresh = useAnimation()
  const hook_form = usePageForm()

  return (
      <UiBoxApp>
        <UiAppBar>
          <UiToolbar>
            <UiButtonIconMenu
                onClick={hook_drawer.Enable}
            />
            <UiBoxLogo/>
            <UiButtonIconReset
                icon_button={{
                  onClick: () => {
                    hook_button_icon_refresh.Animate()
                    hook_form.Reset()
                  }
                }}
                icon={{
                  onAnimationEnd: hook_button_icon_refresh.onAnimationEnd,
                  status_animated: hook_button_icon_refresh.status_animated
                }}
            />
          </UiToolbar>
        </UiAppBar>
        <ListMenu
            drawer={{
              onClose: hook_drawer.Disable,
              open: hook_drawer.status
            }}
            list={{
              active_route: hook_location.pathname,
              fn_close: hook_drawer.Disable,
              fn_navigate: hook_navigate
            }}
        />
        <UiBoxPage>
          <PageRenderer/>
        </UiBoxPage>
      </UiBoxApp>
  )
}