import os


def id(code):
    u = code % 10 + 97
    d = code // 10 + 97
    return f'{chr(d)}{chr(u)}'


def yml(dir, title):
    global code
    files = os.listdir(path=dir)
    files.sort()

    print(title)

    for file in files:
        label = id(code)
        print('    -')
        print(f'        foto: {file}')
        print(f'        id: {label}')

        code += 1

code = 0
yml('../assets/images/fronteiras-2/fotos/palestras', 'palestras:')
print()
yml('../assets/images/fronteiras-2/fotos/posters', 'posters:')
