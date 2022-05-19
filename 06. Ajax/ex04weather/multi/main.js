function aa() {
  // jQuery를 통해 ajax를 요청을 할거에염 !
  // 객체로 넣어줄거야
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric",
    type: "get",
    success: function (data) {
      console.log("데이터에 접근 성공!");
      console.log(data.main);

      let container = document.getElementById("container");
      container.innerHTML += `<p>현재 기온 : ${data.main.temp}</p>`;
      container.innerHTML += `<p>최고 기온 : ${data.main.temp_max}</p>`;
      container.innerHTML += `<p>최저 기온 : ${data.main.temp_min}</p>`;
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar", //차트의 형태 (bar, line, pie )
        data: {
          //차트에 들어갈 데이터
          labels: [
            // x축에 들어갈 데이터
            "현재온도",
            "최고기온",
            "최저기온",
          ],
          datasets: [
            {
              //데이터
              label: "현재 날씨", //차트제목
              fill: false, //line형태일 때, 선 안쪽을 채울건지?
              data:
                //x축 label에 대응되는 데이터 값
                [data.main.temp, data.main.temp_max, data.main.temp_min],
              backgroundColor: [
                // 색상
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                // 경계선 색상
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              // 경계선의 굵기
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    error: function () {
      alert(123);
    },
  });
}
