import { useDispatch, useSelector } from "react-redux"
import { getAllUsersAsync } from "../../redux/actions"
import toChar from "../../utils/toChar"

const StaffMenu = ({ setCreateForm }) => {
  const dispatch = useDispatch()
  const role = useSelector(state => state.global.user.role)

  return (
    <div id='staff-menu'>
      <div className='staff-menu-container'>
        <ul>
          {
            role === 'admin' &&
            <li className='add'>
              <button onClick={() => setCreateForm(true)}>
                <i className="fas fa-plus"></i>
                <span>
                  Thêm nhân viên
                </span>
              </button>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

export default StaffMenu