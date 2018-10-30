#!/bin/bash
echo "1. 开始编译生成网站"
rm -rf /opt/mkdocs/home/site
cp README.md docs/index.md
sed -i "s?docs/??g" docs/index.md
mkdocs build

if [ -d "/opt/mkdocs/home/site" ];then
    echo "-- 编译网站成功"
else
    echo "-- 编译网站失败"
    exit 1
fi


echo "2. 上传网站到GitHub，等待上传"
rm -rf /opt/git/home/docs
mv -f /opt/mkdocs/home/site /opt/git/home/docs

if [ -d "/opt/git/home/docs" ];then
    echo "-- 上传网站成功"
else
    echo "-- 上传网站失败"
    exit 1
fi

echo "3. 开始备份"
date_time=`date +%Y%m%d`
root_dir="/Users/jiangzl/百度云同步盘/ApacheCN/网站建设/"
file_name="copy-apachecn-home-"${date_time}".zip"
file_dir=${root_dir}${file_name}
if [ -f ${file_dir} ];then
    rm ${file_dir}
fi
zip -q -r -o ${file_dir} "/opt/mkdocs/home/"

if [ -f ${file_dir} ];then
    echo "-- 备份网站成功"
    echo "-- "${file_dir}
else
    echo "-- 备份网站失败"
    exit 1
fi

echo "4. 等待打开GitHub，提交注释上传"
