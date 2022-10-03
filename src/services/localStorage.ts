export function salvar<T>(key: string, value:T[]) {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
}

export function obter<T> (key: string) :T[]{
 return JSON.parse(localStorage.getItem(key) as string) as T[];
}

 