import {FC, ReactElement} from "react";

const PlayerPreview: FC<IProps> = ({avatar, userName, children}): ReactElement => {
  return (
      <div>
          <div className='column'>
              <img className='avatar' src={avatar} alt="Avatar"/>
              <h2 className='username'>@{userName}</h2>
          </div>
          {children}
      </div>
  )
}

interface IProps {
    avatar: string,
    userName: string,
    children: ReactElement,
}

export default PlayerPreview;