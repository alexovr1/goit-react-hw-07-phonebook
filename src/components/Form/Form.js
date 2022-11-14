import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectIsContact } from 'redux/selectors';


export const Form = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectIsContact);

    const handleSubmit = ({ name, number }, action) => {
        if (
            contacts.find(user => user.name.toLowerCase() === name.toLowerCase())
        ) {
            return alert(`${name} is already in contacts`);
        }
        dispatch(addContact(name, number));
        action.resetForm();
    };
    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
                <FormStyles>
                    <Label display='block'>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Label>
                    {/* <br /> */}
                    <Label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={values.number}
                            onChange={handleChange}
                        />
                    </Label>
                    {/* <br /> */}
                    <SubmitBtn type="submit">Add contact</SubmitBtn>
                </FormStyles>
            )}
        </Formik>
    );
};
