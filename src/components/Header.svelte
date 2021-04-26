<script>
  import { useInterval } from '../assets/utils/useInterval';
  import { formatClock } from '../assets/utils/formatClock';
  import { fetchWeather } from '../assets/utils/fetchWeather';

  // 时钟
  let clock = formatClock();
  useInterval(() => {
    clock = formatClock();
  }, 1000);

  const weather = {
    nowWeather: '',
    nowTemp: '',
    todayWeather: '',
    todayMinTemp: '',
    todayMaxTemp: '',
    nextWeather: '',
    nextMinTemp: '',
    nextMaxTemp: '',
    suggestion: '',
  };

  fetchWeather()
    .then((data) => {
      weather.nowWeather = data.now.cond.txt;
      weather.nowTemp = data.now.tmp;
      weather.todayWeather = data.daily_forecast[0].cond.txt_d;
      weather.todayMinTemp = data.daily_forecast[0].tmp.min;
      weather.todayMaxTemp = data.daily_forecast[0].tmp.max;
      weather.nextWeather = data.daily_forecast[1].cond.txt_d;
      weather.nextMinTemp = data.daily_forecast[1].tmp.min;
      weather.nextMaxTemp = data.daily_forecast[1].tmp.max;
      weather.suggestion = data.suggestion.drsg.txt;

      weather = weather;
    })
    .catch(() => {});
</script>

<header>
  <span>好看的皮囊千篇一律 有趣的灵魂万里挑一</span><br />
  {#if weather.nowWeather}
  <span>{ clock } 深圳 {weather.nowWeather} 温度{weather.nowTemp}°C</span><br />
  <span>今日天气{weather.todayWeather} 温度{weather.todayMinTemp}°C~{weather.todayMaxTemp}°C
    明日天气{weather.nextWeather} 温度{weather.nextMinTemp}°C~{weather.nextMaxTemp}°C</span><br />
  <span>{weather.suggestion}</span>
  {/if}
</header>

<style>
header {
  width: 100%;
  line-height: 32px;
  padding: 30px 0 20px;
  margin: 20px 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
}

header span:hover {
  display: inline-block;
  color: #ffe4b5;
  transform: scale(1.2);
  transition: transform ease-in-out 0.3s;
  text-shadow: 1px 1px 1px #ccc, 2px 2px 2px #ccc, 3px 3px 3px #444;
}
</style>