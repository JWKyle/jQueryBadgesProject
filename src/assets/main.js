$(function() {

  $.ajax({
  url: 'https://www.codeschool.com/users/jwkyle.json',
  dataType: 'jsonp',
  success: function(response) {
    console.log('Success!', response.courses.in_progress);
    completedCourses(response.courses.completed);
    progressCourses(response.courses.in_progress);
  }
});

function completedCourses(courses) {

  var $badges = $('#badges');

  courses.forEach(function(course) {
    // console.log(course);

    var $course = $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course'
    }).appendTo($course);
  })
}
function progressCourses(courses) {

  var $badges = $('#badges');

  courses.forEach(function(course) {
    // console.log(course);

    var $course = $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($course);

    $('<img />', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course'
    }).appendTo($course);
  })
}

});


//https://www.codeschool.com/users/jwkyle.json
// testing green
