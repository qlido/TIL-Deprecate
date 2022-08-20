cmake_minimum_required(VERSION 3.23)
project(C C)

set(CMAKE_C_STANDARD 11)

include_directories(.)



add_executable(nypc_drift nypc/drift.c)
add_executable(nypc_palpange nypc/palpange.c)