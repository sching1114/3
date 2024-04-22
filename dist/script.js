function translateToArabic() {
            var chineseText = document.getElementById("chineseText").value;
            // 这里假设我们有一个简单的翻译字典
            var translations = {
                "你好": "مرحبا",
                "世界": "عالم",
                "再見": "وداعا"
                // 添加更多的翻译对
            };
            var arabicText = translations[chineseText];
            if (arabicText) {
                document.getElementById("arabicText").innerHTML = "阿拉伯文：" + arabicText;
            } else {
                document.getElementById("arabicText").innerHTML = "呵呵，我也不知道。";
            }
        }