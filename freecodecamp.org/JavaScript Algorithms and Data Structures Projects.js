// Palindrome Checker

function palindrome(str) {
	let newStr
	let newStrArr
	let palid
	let newpalid

	function escapeRegExp(string) {
		return string.replace(/[\s.,*+\-\_?^$:{}()|[\]\/\\]/g, '');
	}
	newStr = str.toLowerCase();

	newStrArr = newStr.split('');
	newStr = escapeRegExp(newStr)

	newStrArr.reverse()

	palid = newStrArr.join('')
	newpalid = escapeRegExp(palid)

	if (+newpalid !== NaN) {
		+newpalid;
	}

	if (newpalid === newStr) {
		return true
	} else {
		return false;
	}

}