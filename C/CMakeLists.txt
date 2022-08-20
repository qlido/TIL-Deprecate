cmake_minimum_required(VERSION 3.22)
project(C C)

set(CMAKE_C_STANDARD 11)

include_directories(.)
include_directories(CodeUp)


add_executable(nypc_palpange nypc/palpange.c)