Template.editstudent.events({
    "submit form": function (event) {
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;
        var mail = event.target.mail.value;
        var dob = event.target.dob.value;
        var note = event.target.note.value;
        var id = event.target.id.value;
		

        student.update({
			_id: id
		},					   
		
        {		   
            firstname: firstname,
            lastname: lastname,
            mail: mail,
            dob: dob,
            note: note
        });
    }
}); 