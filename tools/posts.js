/**
 * 確認post貼文檢查規則
 * @param {object} postData 貼文資料
 * @param {object} res 回傳使用者的response
 * @returns 確認是否通過post貼文內容, 不通過則回傳error
 */
const checkPostFormatData = (postData) => {
  if (!postData.name) return "貼文名稱未填寫";
  if (!postData.content.trim()) return "貼文內容未填寫";
  return null;
};

module.exports = { checkPostFormatData };
