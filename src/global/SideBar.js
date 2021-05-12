import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const SideBar = () => {
  const menu = useSelector(state => state.global.menu)
  const location = useLocation()
  const asPath = location.pathname || '/'
  const login = useSelector(state => state.global.login)

  return (
    <div id='side-bar'>
      <div className='side-container'>
        <div className='logo'>
          <a href='/'>
            <img src='/images/logo.png' />
          </a>
        </div>
        <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Đại Học CNTT Hà Nội</span>
        <ul>
          {
            menu.map((item, index) => {
              if (item.login) {
                if (login) {
                  return (
                    <li key={index}>
                      <Link to={item.path}>
                        {item.icon}
                        {item.title.toUpperCase()}
                      </Link>
                      <span className={(item.path === asPath) && 'active'}></span>
                    </li>
                  )
                }
              } else {
                return (
                  <li key={index}>
                    <Link to={item.path}>
                      {item.icon}
                      {item.title.toUpperCase()}
                    </Link>
                    <span className={(item.path === asPath) && 'active'}></span>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar