/*
 * ����: ������ ����ϱ�
 * �̿� : ����
 * ��� : �������� �Է��ϸ� �ڵ����� �������
 */


#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef int element;

typedef struct Stack {
    element data;
    struct Stack *link;
} Stack;

Stack *top;

void push(element item) {
    Stack *temp = (Stack *) malloc(sizeof(Stack));
    temp->data = item;
    temp->link = top;
    top = temp;
}

element pop() {
    element item;
    Stack *temp = top;

    if (top == NULL) {
        printf("\n\n Stack empty!\n");
        return 0;
    } else {
        item = temp->data;
        top = temp->link;
        free(temp);
        return item;
    }
}

element evalPostfix(char *exp) {
    int opr1, opr2, value, i = 0;
    int length = strlen(exp);
    char symbol;
    top = NULL;

    for (i = 0; i < length; i++) {
        symbol = exp[i];
        if (symbol != '+' && symbol != '-' && symbol != '*' && symbol != '/') {
            value = symbol - '0';
            push(value);
        } else {
            opr2 = pop();
            opr1 = pop();
            switch (symbol) {
                case '+':
                    push(opr1 + opr2);
                    break;
                case '-':
                    push(opr1 - opr2);
                    break;
                case '*':
                    push(opr1 * opr2);
                    break;
                case '/':
                    push(opr1 / opr2);
                    break;
            }
        }
    }
    return pop();
}

int main() {
    int result;
    char *express = "35*62/-"; //���� �������� �Է��ϼ��� ^^ scanf�ϴϱ� ������ ��

    printf("������ -> %s", express);

    result = evalPostfix(express);
    printf("\n���� ��� -> %d", result);

    return 0;
}
