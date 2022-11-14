import { Formik } from 'formik';
import { FormStyles, Label, SubmitBtn } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectIsContact } from 'redux/selectors';

export const Form = () => {
    const dispatch = useDispatch();

    const checkContacts = useSelector(selectIsContact);
    const handleSubmit = ({ name, phone }, action) => {
        if (!checkContacts(name)) {
            alert(`${name} is already is contacts`);
            return;
        }
        dispatch(addContact({ name, phone }));
        action.resetForm();
    };
    return (
        <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
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
                    <Label>
                        Number
                        <input
                            type="tel"
                            name="phone"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={values.phone}
                            onChange={handleChange}
                        />
                    </Label>
                    <SubmitBtn type="submit">Add contact</SubmitBtn>
                </FormStyles>
            )}
        </Formik>
    );
};
