cmake_minimum_required(VERSION 3.23)
project(TIL C)
set(CMAKE_CXX_FLAGS "-fexec-charset=CP949")
set(CMAKE_C_STANDARD 11)

add_executable(TIL
        C/CodeUp/test.c)

