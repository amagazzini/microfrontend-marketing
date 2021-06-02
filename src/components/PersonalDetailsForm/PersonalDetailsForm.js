import React from 'react';

// style
import s from './style';

const PersonalDetailsForm = () => {
    return (
        <div style={s.detailContainer}>
            <input
                style={{ ...s.input, ...s.fullWidth }}
                name="name"
                type="text"
                placeholder="Full Name"
                required
            />
            <input
                style={{ ...s.input, ...s.fullWidth }}
                name="address"
                type="text"
                placeholder="Address"
                required
            />
            <input
                style={{ ...s.input, ...s.halfWidth }}
                name="city"
                type="text"
                placeholder="City"
                required
            />
            <input
                style={{ ...s.input, ...s.halfWidth }}
                name="state"
                type="text"
                placeholder="State"
                required
            />
            <input
                style={{ ...s.input, ...s.halfWidth }}
                name="country"
                type="text"
                placeholder="Country"
                required
            />
            <input
                style={{ ...s.input, ...s.halfWidth }}
                name="zip"
                type="text"
                placeholder="Zip"
                required
            />
        </div>
    )
}

export default PersonalDetailsForm;