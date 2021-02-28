function solution(numbers) {
    let answer = 0;

    const n = numbers.split('');
    const nums = new Set()
    combi(n,'');

    function combi(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s))=== false) {
                nums.add(Number(s));
                if (chkPrime(Number(s))) {
                  answer++;
                }
            }
        }
        if (a.length > 0) {
            for (let i = 0; i< a.length; i++) {
                const t = [...a];
                t.splice(i,1);
                console.log(t,s + a[i]);
                combi(t,s + a[i]);
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}
console.log(solution("011"));