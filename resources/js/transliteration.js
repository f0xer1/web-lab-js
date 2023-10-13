const transl = { 'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v',
          'Г': 'H', 'г': 'h', 'Ґ': 'G', 'ґ': 'g', 'Д': 'D', 'д': 'd',
          'Е': 'E', 'е': 'e', 'Є': 'Ye', 'є': 'ie', 'Ж': 'Zh', 'ж': 'zh',
          'З': 'Z', 'з': 'z', 'И': 'Y', 'и': 'y', 'І': 'I', 'і': 'i',
          'Ї': 'Yi', 'ї': 'i', 'Й': 'Y', 'й': 'i', 'К': 'K', 'к': 'k',
          'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n',
          'О': 'O', 'о': 'o', 'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r',
          'С': 'S', 'с': 's', 'Т': 'T', 'т': 't', 'У': 'U', 'у': 'u',
          'Ф': 'F', 'ф': 'f', 'Х': 'Kh', 'х': 'kh', 'Ц': 'Ts', 'ц': 'ts',
          'Ч': 'Ch', 'ч': 'ch', 'Ш': 'Sh', 'ш': 'sh', 'Щ': 'Shch', 'щ': 'shch',
          'Ю': 'Yu', 'ю': 'iu', 'Я': 'Ya', 'я': 'ia', '': '', 'ь': '', '’': '', '’': '' };

function transliterate() {
    let text = document.getElementById("inputField").value;
    let result = "";

    for (letter in text) {
        if (transl[text[letter]] !== undefined) {
            result += transl[text[letter]];
        } else {
            result += text[letter];
        }
    }

    document.getElementById("outputField").value = result;
}