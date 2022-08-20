cmake_minimum_required(VERSION 3.22)
project(C C)

set(CMAKE_C_STANDARD 11)

include_directories(.)
include_directories(CodeUp)

#add_executable(C
#        CodeUp/1851.c CodeUp/1912.c CodeUp/1852.c)

add_executable(CodeUp_1912 CodeUp/1912.c)
add_executable(CodeUp_1852 CodeUp/1852.c)
add_executable(CodeUp_1853 CodeUp/1853.c)
add_executable(CodeUp_1915 CodeUp/1915.c)