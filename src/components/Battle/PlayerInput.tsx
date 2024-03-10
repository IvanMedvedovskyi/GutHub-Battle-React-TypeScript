import {ChangeEvent, FC, FormEvent, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTempUserName} from "../redux/battle/battle.actions";

const PlayerInput: FC<IProps> = memo(({id, label, onSubmit}) => {
    const dispatch = useDispatch();
    const userName = useSelector((state: MyState ) => state.battle[`${id}Name`]);

    const SubmitHandler = (event: FormEvent): void => {
    event.preventDefault()
      onSubmit(id, userName)
  }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newUserName = event.target.value;
        dispatch(setTempUserName(id, newUserName)); // Обновляем временное значение в редюсере
    };

  return (
      <form className='column' onSubmit={SubmitHandler}>
          <label className='header' htmlFor="userName">{label}</label>
          <input
              type="text"
              id='userName'
              placeholder='GitHub UserName'
              autoComplete='off'
              value={userName}
              onChange={handleInputChange}
          />
          <button
              style={{cursor: "pointer"}}
              type='submit'
              className='button'
              disabled={!userName.length}
          >Submit
          </button>
      </form>
  )
})

interface IProps {
    id: string,
    userName: string,
    label: string,
    onSubmit: (id: string, userName: string) => void
}

interface MyState {
    battle: {
        [key: string]: string;
    };
}

export default PlayerInput;