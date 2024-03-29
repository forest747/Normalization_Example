window.onload = function () {
    this.document.registerForm.submitButton.onclick = function () {
        var registerForm = document.registerForm;
        var id = registerForm.id.value;
        var pw = registerForm.pw.value;
        var pw_ok = registerForm.pw_ok.value;
        var name = registerForm.name.value;
        var gender = registerForm.gender.value;
        var email = registerForm.email.value;
        var phoneNumber = registerForm.phoneNumber.value;
        var submitButton = registerForm.submitButton.value;
        var regex; //유효성 검사를 위한 정규표현식.

        // 가입하기를 눌렀을 때, 입력값이 모두 입력되었는지 유효성 검사.

        if (id == "") { alert("아이디를 입력하세요"); return; }
        if (pw == "") { alert("비밀번호를 입력하세요"); return; }
        if (pw_ok == "") { alert("비밀번호를 확인하세요"); return; }
        if (name == "") { alert("이름을 입력하세요"); return; }
        if (gender == "") { alert("성별을 선택하세요"); return; }
        if (email == "") { alert("이메일을 입력하세요"); return; }
        if (phoneNumber == "") { alert("폰번호를 입력하세요"); return; }

        // check pw validad
        if (pw != pw_ok) { alert(" 비밀번호가 다릅니다 ! "); return; }
        
        //정규표현식을 이용한 유효성 검사
        // 이메일 확인 정규표현식
        
        regex=/^([\w-]+(?:\.[\w]+)*)@((?:[\w]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if(regex.test(email) === false) {
            alert("잘못된 이메일입니다.");
            return ;
        }
        regex=/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
        if(regex.test(phoneNumber) === false) {
            alert("wrong phone number");
            return;
        }
        alert("회원가입 완료");
    }
}
