const FULL_PARTICIPATION_FEE = 55000;
const PARTIAL_PARTICIPATION_FEE_PER_ITEM = 12000;

function checkAll(isChecked) {
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        if (!checkbox.disabled) {
            checkbox.checked = isChecked;
        }
    });
}

function calculateFee() {
    console.log('Calculate function called');
    let checkedCount = 0;
    let dinnerOrNightSet = new Set();

    document.querySelectorAll('.checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            if (checkbox.classList.contains('dinner') || checkbox.classList.contains('night')) {
                dinnerOrNightSet.add(checkbox.closest('tr').rowIndex);
            } else {
                checkedCount++;
            }
        }
    });

    checkedCount += dinnerOrNightSet.size;

    let totalFee = checkedCount * PARTIAL_PARTICIPATION_FEE_PER_ITEM;
    if (totalFee > FULL_PARTICIPATION_FEE) {
        totalFee = FULL_PARTICIPATION_FEE;
    }

    document.getElementById('total').innerText = `➡️ 총액은 ${totalFee.toLocaleString()}원 입니다.`;
}

document.getElementById('calculateButton').addEventListener('click', calculateFee);
