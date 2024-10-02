const saveAuthToCookie = (token) => {
    document.cookie = `authToken=${token}; path=/;`;
};

const getAuthFromCookie = () => {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');
    const authTokenCookie = cookieArray.find(cookie => cookie.startsWith('authToken='));
    return authTokenCookie ? authTokenCookie.split('=')[1] : null;
};

const saveUserToCookie = (user) => {
    document.cookie = `user=${user}; path=/;`;
};

const getUserFromCookie = () => {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');
    const userCookie = cookieArray.find(cookie => cookie.startsWith('user='));
    return userCookie ? userCookie.split('=')[1] : null;
};

const deleteCookie = (value) => {
    document.cookie = `${value}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

export {
    saveAuthToCookie,
    getAuthFromCookie,
    saveUserToCookie,
    getUserFromCookie,
    deleteCookie
}
	
