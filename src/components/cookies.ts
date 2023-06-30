export const SetCookies = ({ name, value, exdays }: { name: string; value: string; exdays?: number }): void => {
    if (name && value) {
      const date = new Date();
      date.setTime(date.getTime() + (exdays ?? 30) * 24 * 60 * 60 * 1000);
      let expires = 'expires=' + date.toUTCString();
      document.cookie = name + '=' + value + ';' + expires + ';path=/';
    }
  };
  
  export const GetCookies = (name: string): string | null | undefined => {
    if (name) {
      const decodeCookies = decodeURIComponent(document.cookie).split(' ');
      const filterCookies = decodeCookies.filter((cdata) => cdata.split('=').includes(name));
      return !!filterCookies.length ? filterCookies[0].split('=')[1]?.split(';')[0] : null;
    }
    return undefined;
  };
  
  export const RemoveCookies = (name: string): string | void => {
    if (name) {
      document.cookie = name + '= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    } else {
      return name;
    }
  };