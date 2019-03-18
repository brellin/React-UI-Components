import React from 'react';
import moment from 'moment';

const HeaderTitle = () => {
    return <h1>Lambda School <i>@LambdaSchool | {moment("0318", "MMDD").format('D MMM')}</i></h1>;
}

export default HeaderTitle;