// import {useState} from 'react'
import utils from '../utils'
import {useState} from 'react'
const Main = (BodyProps) => {
  const BodyPropsList = utils.clone(BodyProps.favorList);
  const [state, setState] = useState({name: "박준수", gender: "남자"});

  const changeInput = (e) => { 
    setState({...state, [e.currentTarget.name] : e.currentTarget.value}); 
  }
  return (<>
    <div>
      <div>
          <input name="name" value={state.name} onChange={changeInput} placeholder="이름을 입력해주세요."/>
      </div>
      <div>
        <select name="gender" value={BodyPropsList.gender} onChange={changeInput}>
          {BodyPropsList.map(item => {return <option key={item.id}>{item.gender}</option>})}
        </select>
      </div>
    </div>
  </>);
}

export default Main;