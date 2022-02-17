import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function InputForm({addTask}) {
   
    var userInput = ''



    return (
        <form >
            <TextField id="outlined-basic" label="New Task"
                type="text"
                onChange={event => userInput=event.target.value}
            />
            <div >
            <Button  type="reset"onClick={() => {addTask(userInput); console.log(userInput);}}  variant="contained" color="primary" >Сохранить</Button>
            </div>
        </form>

    );
}

export default InputForm;
/// сделать увелечение div при много текста
/*
<form   >
<TextField id="outlined-basic" label="New Task"
    type="text"
    onChange={event => userInput=event.target.value}
/>
<div onClick={() => addTask(userInput)} onsubmit="return false;">
<Button variant="contained" color="primary" type='submit'>Сохранить</Button>
</div>

</form>
*/