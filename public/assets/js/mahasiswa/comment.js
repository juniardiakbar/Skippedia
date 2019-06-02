$(document).ready(function() {
	$('#r5').hover(function() {
		$("#r1").addClass("hover");
		$("#r2").addClass("hover");
		$("#r3").addClass("hover");
		$("#r4").addClass("hover");
		$("#r5").addClass("hover");
	})
	$('#r4').hover(function() {
		$("#r1").addClass("hover");
		$("#r2").addClass("hover");
		$("#r3").addClass("hover");
		$("#r4").addClass("hover");	
	})
	$('#r3').hover(function() {
		$("#r1").addClass("hover");
		$("#r2").addClass("hover");
		$("#r3").addClass("hover");
	})
	$('#r2').hover(function() {
		$("#r1").addClass("hover");
		$("#r2").addClass("hover");
	})
	$('#r1').hover(function() {
		$("#r1").addClass("hover");
	})

	$('#r5').mouseleave(function() {
		$("#r1").removeClass("hover");
		$("#r2").removeClass("hover");
		$("#r3").removeClass("hover");
		$("#r4").removeClass("hover");
		$("#r5").removeClass("hover");
	})
	$('#r4').mouseleave(function() {
		$("#r1").removeClass("hover");
		$("#r2").removeClass("hover");
		$("#r3").removeClass("hover");
		$("#r4").removeClass("hover");	
	})
	$('#r3').mouseleave(function() {
		$("#r1").removeClass("hover");
		$("#r2").removeClass("hover");
		$("#r3").removeClass("hover");
	})
	$('#r2').mouseleave(function() {
		$("#r1").removeClass("hover");
		$("#r2").removeClass("hover");
	})
	$('#r1').mouseleave(function() {
		$("#r1").removeClass("hover");
	})

	$('#r5').click(function() {
		$("#r1").addClass("checked");
		$("#r2").addClass("checked");
		$("#r3").addClass("checked");
		$("#r4").addClass("checked");
		$("#r5").addClass("checked");
		$('#badge').removeClass("badge-secondary badge-primary badge-info badge-success badge-warning badge-danger");
		$('#badge').addClass("badge-success");
		$('#badge').html("Excelent");
		$('#form-rating').val(5);
	})
	$('#r4').click(function() {
		$("#r1").addClass("checked");
		$("#r2").addClass("checked");
		$("#r3").addClass("checked");
		$("#r4").addClass("checked");
		$("#r5").removeClass("checked");	
		$('#badge').removeClass("badge-secondary badge-primary badge-info badge-success badge-warning badge-danger");
		$('#badge').addClass("badge-primary");
		$('#badge').html("Very Good");
		$('#form-rating').val(4);
	})
	$('#r3').click(function() {
		$("#r1").addClass("checked");
		$("#r2").addClass("checked");
		$("#r3").addClass("checked");
		$("#r4").removeClass("checked");
		$("#r5").removeClass("checked");
		$('#badge').removeClass("badge-secondary badge-primary badge-info badge-success badge-warning badge-danger");
		$('#badge').addClass("badge-info");
		$('#badge').html("Good");
		$('#form-rating').val(3);
	})
	$('#r2').click(function() {
		$("#r1").addClass("checked");
		$("#r2").addClass("checked");
		$("#r3").removeClass("checked");
		$("#r4").removeClass("checked");
		$("#r5").removeClass("checked");
		$('#badge').removeClass("badge-secondary badge-primary badge-info badge-success badge-warning badge-danger");
		$('#badge').addClass("badge-warning");
		$('#badge').html("Fair");
		$('#form-rating').val(2);
	})
	$('#r1').click(function() {
		$("#r1").addClass("checked");
		$("#r2").removeClass("checked");
		$("#r3").removeClass("checked");
		$("#r4").removeClass("checked");
		$("#r5").removeClass("checked");
		$('#badge').removeClass("badge-secondary badge-primary badge-info badge-success badge-warning badge-danger");
		$('#badge').addClass("badge-danger");
		$('#badge').html("Poor");
		$('#form-rating').val(1);
	})
});