function singleElement(nums) {
    const set = new Set();
  
    for (num of nums) {
      if (set.has(num)) {
        set.delete(num);
      } else {
        set.add(num);
      }
    }
  
    return set.values().next().value;
  }

  

  function singleElement(nums) {
    const set = new Set();
  
    for (num of nums) {
      if (set.has(num)) {
        set.delete(num);
      } else {
        set.add(num);
      }
    }
  
    return set.values().next().value;
  }

  