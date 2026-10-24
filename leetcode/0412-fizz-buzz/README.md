# 412. Fizz Buzz

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen) ![Topic](https://img.shields.io/badge/Topic-Math-blue) ![Topic](https://img.shields.io/badge/Topic-String-blue) ![Topic](https://img.shields.io/badge/Topic-Simulation-blue) ![Language](https://img.shields.io/badge/Language-javascript-orange)

## Metadata

| Field | Value |
| --- | --- |
| Runtime | 0 ms |
| Memory | 58 MB |
| Submission Date | 2026-10-24T09:58:00.318Z |
| Platform | leetcode |

## Problem Statement

<p>Given an integer <code>n</code>, return <em>a string array </em><code>answer</code><em> (<strong>1-indexed</strong>) where</em>:</p>

<ul>
	<li><code>answer[i] == &quot;FizzBuzz&quot;</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li>
	<li><code>answer[i] == &quot;Fizz&quot;</code> if <code>i</code> is divisible by <code>3</code>.</li>
	<li><code>answer[i] == &quot;Buzz&quot;</code> if <code>i</code> is divisible by <code>5</code>.</li>
	<li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li>
</ul>

<p>&nbsp;</p>
<p>

## Examples

**Example 1:**

```
</p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["1","2","Fizz"]
</pre><p>
```

**Example 2:**

```
</p>
<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> ["1","2","Fizz","4","Buzz"]
</pre><p>
```

**Example 3:**

```
</p>
<pre><strong>Input:</strong> n = 15
<strong>Output:</strong> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
</pre>
<p>&nbsp;</p>
```

## Constraints

- <code>1 &lt;= n &lt;= 10<sup>4</sup></code>

## Solution

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const ans = [];
    for(var i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            ans.push("FizzBuzz");        
        } else if (i%3===0){
            ans.push("Fizz");
        } else if (i%5===0){
            ans.push("Buzz");
        } else{
            ans.push(i.toString());
        }
    }
    return ans;
};
```

[View on LeetCode](https://leetcode.com/problems/fizz-buzz/)
