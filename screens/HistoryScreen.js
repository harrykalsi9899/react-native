import React from 'react';
import {View, Image, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

import {Avatar, Title} from 'react-native-paper';
import ReviewScreen from './ReviewScreen';

const HistoryScreen = ({navigation}) => {
  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row', height: 100}}>
        <Image
          style={{height: 150, width: 125}}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
        <Image
          style={{height: 150, width: 125}}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
        <Image
          style={{height: 150, width: 125}}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
      </View>
      <View style={{flexDirection: 'row-reverse'}}>
        <Icon name="person-circle" size={50} />
      </View>
      <View style={styles.title}>
        <Title>XYZ MALL</Title>
        <Icon name="checkmark-circle" size={25} />
      </View>
      <View style={styles.title2}>
        <Title>Review Summary </Title>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <View style={styles.icons}>
            <Avatar.Image
              size={55}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHvqCx-04OSmKI6Rg03QPp1rWkanjjakGxGw&usqp=CAU',
              }}
            />

            <Title style={{alignSelf: 'center'}}> &emsp; 45%</Title>
          </View>
          <View style={styles.icons}>
            <Avatar.Image
              size={55}
              source={{
                uri:
                  'https://cdn1.vectorstock.com/i/1000x1000/68/30/sanitizer-soap-icon-isolated-image-pharmacy-and-vector-27846830.jpg',
              }}
            />
            <Title style={{alignSelf: 'center'}}> &emsp; 100%</Title>
          </View>
          <View style={styles.icons}>
            <Avatar.Image
              size={55}
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
            />
            <Title style={{alignSelf: 'center'}}> &emsp; 70%</Title>
          </View>
          <View style={styles.icons}>
            <Avatar.Image
              size={55}
              source={{
                uri:
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUTExIVFRQXFxUXFRgXFQ8dGhcaHxUWFhUYHxUYHyggGBslGxUVITEiJSkrLjIuFx81ODYtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAgQFAwj/xABCEAABAgQEBAUBBgQEAwkAAAABAAIDBBExBSFhcQYSQbEHEyJRgZEUIzJCYoIVcpKhUoPB8TOi8CQlQ2Nzs8PR4f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDd6V9kPspoEFJ6BCenVS2Qult0FJpuhNFLbpbM3QWtLpXqVNSmpQUHqUB+il9kvt3QUGuyVrspfZNAgtfZCegU0CWyCCk9AhP1UtultSgpNN0rS6lszdNSgtepQHqVNSl8zZBQUBrspfbul9kFBrslfZS+QTQIKT0CE9ApbIJbdBSfqrVcbalUCl7oKqoqg4k9ApbIXVJ9rqW3QLbpbdLbpbM3QLZm6alNSmpQNSl9kvsl9u6Bfbul9kvsmgQNAmg/2TQJbIIFsglt0tult0C2pS2ZulszdNSgalNSmpS+ZsgXzNkvt3S+3dL7IF9kvkEvkE0CBoEtkEtkEtugW3S2pS2pS2ZugWzN1QOpU1KoHUoKqpVVBxJpupbdUmilszdAtmbpqU1KalAHuUvsl9kvt3QL7d0vsl9k0CBoE0H+yaBLZBAtkEtult0tugW3S2ZulszdNSgalNSmpS+ZsgXzNkvt3S+3dL7IF9k0CaBNAgaBLZBLZBLboFt0tqUtqUtmboFszdNSmpTUoGpVGeal8zZUZ7d0HKqIiDics1NSqfcqalA1KX2S+yX27oF9u6X2S+yaBA0CaBNArbIIJbIJbdLbpbUoFtSlszdLZm6alA1KalNSl8zZAvmbJfbul9u6X2QL7JfIJfIJoEDQJbIJbIJbdAtultSrbUqWzN0C2ZumpTUpqUDUpfM2S+Zsl9u6BfburWuyl9u6tfZByRSiqDiR1Kl9lSPopfbugX27pfZL7JoEDQJoE0H+ywfxW4kjykCFCljyxph5aHCnMGinNy1y5iXMFelSg4eLnEMaVlocGXcWRY7y0OaaODRTm5T0cS5gr0qaUNFi+IcAYnJQTNwZ5747BzxGN8wEgZuo4uIi09nNzp8LyOMOCJqRgQ5yLMefF8xvmV5zyG7D5jiS8czaVIFwt3YRPsmJeHHbm2KxrwNxUt+LfCDV8v4rzcZkOFLSXmzJb94aPc0kZEthsz5bGpIpWmd163DXiNGM22UxCW8iK8gMcA9o5j+BpY+tA45BwJFctV5PAQ/h+OTUiQAyKD5WXt97BAPt5b3g6tXq+NmDl8pDm2ZRIDwCRcMeQK1HUPDDpUoNj6lNSvL4WxYTcnBmcvWwFwFg8el4+HBwXqXzNkC+Zsl9u6X27pfZAvsl8gmgTQIGgS2QS2QXxnZpkGE+I80axrnuOjQST9AgwnjTxAdKzAk5SD9omTTmHqIaSKtbytze6mdMqAheI3xRnZZxZPyBY4tcWFoeypFsnkgtqQCQcvY2V8H5V0xMzeJRRVz3uYyvQuPmRKaAeW0aVCeM0w6PHk8Ph0L3vDzoXHyoXxnEJ2CDz8J4VxLFmGcmJ10IPJ8loa8igNKtYHNDGVyFyaVPufe8KsYmRHmcPmohiPgEljnOLjQO5Ht5jmW1LCK5+oj2Az+TlocvAawUbDhMDR7Na1tOwWkcC4diYxNTk2yKZcCJzQ3cpNXOJLW5EEUYG1I/xBBvfUpfM2WuvDDHJszExh848xIkuKtcSSaBwa4F5zePUwgnP1ZrYt9u6Bfbul9u6X27pfIWQL5CytegU0CugQWiqiqDiRXZS+ypz2U0CBoE0CaD/ZLZBAcQB/1lqVpDxU4rk5mLLOlohiOlnvcXBp5HVMNwLXfmzh3GXsth+Kk26FhMwWGhdyQyf0viNY/6tJHysMbwTLxOHmxocMGZ8v7Rzget35nQ9W8gIDfcA3QbK4gw5k5JRYNaiND9B9jTmhu+HBp+FhfgnipMvGlImUSXeSGm4a5x5m/EQPr/ADBex4T4yJjDIdTV8H7h2zQDDPywsz9wVimK/wDdvEcON+GDNfi9hz0ZEHxEDHk/qQffxilny8xKYjDHqY8MdqWkxIYJ1Aig/C2LMQYU7JkE1hTELI/pezJ2+YK6XHGDfa8Pjwqeot5of87fWz6kU2JWPeDGMefh/lOPql3clP0O9UM7fib+xB5ngtPPhmZw+Nk+C8vaPny4oGgcGn95W0b7d1qPjE/w/HpedGUGYp5nt0hRvgNMN+pC25fbugX2S+QS+QTQIGgS2QS2QS26Bbda/wDGjF/JkBAafXMODTS/I2jn5ankbT9RWwLalajnz/EeJGw/xQZS/t92Q5/1jOazZqDYPBWDiTkIEEijwwGJ/O71P+hJGwC1/wADu/iGOzM8c4cGvle2dYUGm7GxHbuWa+JGL/ZcNjPBpEePKh/zPyqNQ3md+1dHwjwYS+GseRR0cmMdiAIf/IGn9xQTxdxnyMNe2tHxz5LR+kgmKf6AR+4Lv+G+B/ZcOgscKPePNiDrzPzodWt5W/tWE8VH+JcQQJQZwZehie2VIkau9IcPdbC4zxn7LIR4/VrKQ9Xu9EP45nA7AoNWcPcUysDHJ2ZjucGRHRYTC1pcKeayhNM6UhC1brdMtMMisa+G4OhuAc1zSCHAioIIuKLUnAnBEvFwiNGmGAxIzYhhvd+KG1gIY5pNiXNc4nqKdF7fgdOPiYc9jrQ4zmt0BYyIR/U931QbEvkLJoE0CaBA0Coyy6qWyF1Rlug5Ioqg4n2U0CpPQKWyCBbIJbdLbpbdB4XHeH+dhs1DpVxhOc3VzPvG/wB2heF4NT4iYWGk1MKJEh5+xpEaNqRKfCzpzRQ1zrl/+LU/g8fs07PSLvyGrAf/AC3uhk/LXQz8IOHAp/h2OTEg7KHFqYXtkDEhU/y3Pbu0Be/4y4MY+HmMB65d3PryH0xPoKO/YvI8ZZJ8GLK4lCFHw3tY74cYkKulQ8H+YLYRnYEeSMd5rLvgl7q5/dmHV1QP0k5IOjwHjP2vD4EZxq8N5In/AKjPS4/NObZwWu5Gch4Rj0w2KSyVjtL68riAHExIZ5WgkgP8xgoOq6PhXiOIMi+VKQTGlHR2+a57SORuTS7nrytfyBri3Ow96rOJjw3gx8QjTc1FdHhvpyQjzN5cgKF4dUtFMgAL51QTxRkYc7hJjwiHiEBMQ3CzmUPmfHISf2heh4fY+JjC4cWI8AwmmHGcSMjDGbielWcrv3LI4MnCbCEFjGthNbyBoA5Q2lOUD2ovzviczHkBPYYK8j4rBc15WnmbT352GGDtRBm0bi7F8SjPZhbPKgMNPMIh1PsXOiAhtbhrQXe+nzZxNjmHTMGHPlkWFFeG1+5rSrQ4tdD5TUcwPrGdtticH4K2TkoUu0DmDQ6IfeI7N5+uQ0AHRa94pd9v4hl5VmbJYgxD0qCIsX4yhs3qEHZ4g4pxaYxCNI4cGs8r8T6QeY05Q9xMWrQ3mcBQAnrt1IvEGP4W9sSeaJiXcQHEeTloHsa0td7c4obBc8Wf/DuJWRnZQZoAOPQc4EN30iNY46OW0MVw6HHgRIMUVZEaWO+R09iDmD7hB5s/xNAbhr59jg5nlF7OlXH0sZToechpHusS8FMM5JaNOxT6473eo9WsJ5nfMQvr/KFrOJNTTYL8JuftYHX8YJh8oH+Ev5X7jVfojB8MZLy0OAPwQ4bWCvWgoSfcnM/KDU3HuNQsWnJOTlYnPCLzzuAeBUmjiOYCvLDa81t6ltbFZ2HKysSMRSHBhkho9mt9LRvkBusSxHwvljMQY8o8yhhva5waHODgDX01cPLPTqKGyx/xhxTEqRIJgBsjWEWxQHHnNA6jnA0aOfKhH5Rnmg7/AIKYY97Zifi5vjPLQfejueK4aGIaf5a+PjFOvmJiUw2EfU97Xu0LiYcP4H3jjsFm3Axgfw2W8knyhCGZFCSK+YSOh5+aqwLw/Z/EMamcQP8Aw4dRC/cDDhU2hNcTq9BmHG8Zkng0ZkP0tZBbAh06c3LBbTbmr8LreEEj5eFQzShiuiRTsXcjf+VjV5HjpPESsCXZm6JF5qDqGNoB/XEZ9Fn+CyIl5aDAb/4cNjP6WhtfmiDuaBLZC6WyF0tqUC2pVApe6lszdUDqUFVUVQcSegUtuqT9VLboFt0tmbpbM3TUoGpWpuIHfYuJYEelIcyGB3t6h5Dvo4Q3HdbZ1K1741YOYsi2YaPVLvrUX5H0a/6OEN37Sg9XxTZFfhkVkOXfHLyxvKxr3Ob6w7zOVoJNCBkPfPKq8rwz4TxCW9czMHyXQi0Spc9waS4OBIJ5WEDmqG35szksq4Pxj7ZIwY9c3MAeP1t9MQbcwP8AZexfZB8JOThQmCHChshwxWjWNa1uZqaNbkM199Al8gvM4mxlknKRY5FRDbUD/E4kNY2uriB8oOlxfxhK4eweYeaI4eiE2nM7XP8AC39R/uclrXC8LncXxKDPRJZsGXBhknMBzGOL205s4pOTeYAClPZej4dcKunXnE5/71z3EwmOHpNDTnLT+UEUa22Vc8ltm2Qug6mMT7ZeXixnWhw3vOvK0n/Si134J4eSyYnomcWNEcwHqRXnin9z3Z/yBer4zT/lYW5laOjRIcP4B8x3xSHT9y9zgPDvs+Gy0MijvKa5w/U/7xw+riPhB4PjNgojYcYtKvgODwf0OoyI3aha79gXvcCYt9pw6BHcavLOV5/Wwljz8ltflerick2NAiwn2iMfDOgc0t/1WufAucPkzMs/J0KIH0P5eYcjh8OhH+pB0eNuHp2VxT+Jy0uI0MFsQtoXcruTkdzQxR1PzBwrQmpssx4K49lcQ9H/AAo4FTCcQa+5Y/LnA2BHsssGeZWtvEzgsOa7EJQGHMQvvH8mXmAZl4AtEbevUAg1yQbJvt3XCPBbEaWPaHMcCHNcAQ4dQQciFj/AHERn5JkV1PMaTDjAW5wBmB0DgWup+qnRZHfIWQYZx3wvNzEKFDkZj7OyE2I10FpfDZEBDQ1tYfQAOHKRT1aLp+DcrHgysaDFlnwHNjElz2uHmVaAaA3DeUCoyNcuqz/QLrYpPMgQYkV5o2Gxz3bAE/U0Qavx/wD7bxLAgDOHLchd7VaPPefkmG3cLbNrXWrfBmTfFiTWIRB64r3Mad3eZGIPtzFg/YtpW1KBbUpbM3S2ZumpQNSqB1KmpVGeaC1VUqqg4k03UtmbqnLNTUoGpTUpqUvmbIF8zZfGdlWRob4TxWG9rmOHuCCD/Yr7X27pfZBqbwwnHyM/MYVHdd5dCJ/M4NFv54Ya79p91tm+QWu/FjhiJFayelQftEvTm5PxOY08zSPdzDU09ib5Be7wDxdDxCXBFGxmACMz2PR7fdrqGntmOiDJ9Asb8QeHos9JGXgvax/Ox/r5uUgE5EgEi9bdFklsglt0HSwSQEvLQYAofLhsZUCleVoBNOlTmu7bdLalLZm6DVHi/WYn5CSvzEF40iRGwx/ZkRbXAA/00Wp4RMzxY4n8Mu002bBDf7RIxW2NSgalao4ZpK8TTMGzY4iOaPcuDZgf/Itr3zNlqfxFP2fHcPmhZ/ltOzYvJEP9EYfRBti+3dR7Q4EH8JBB10Vvsl8hZBh/hxwjFw9kdj4jHh8QFvJzZNAoCa/mIplnSlysw0CaBNAgaBaz8Y8YcWwsNgeqLHcwvAvTmpCbpzPAOzNVmnFfEUGQlnRomZsxlc4j+jR3J6AFYJ4Y4LGmZl+LTYq95PkAi9RymIB0aG+hulT7FBsHhrCGScpCl258jaE/4nH1Pd8uJPyvStmbpbM3TUoGpTUpqUvmbIF8zZUZ7KX27q1rt3QckREHE+5U1KpHUqXzNkC+Zsl9u6X27pfZAvsl8gmgTQIGgWoOM5F2EYlCxCXFIEVxEWGLVOcRlPZwHOB0c09KBbftkFj3HvDpnpJ8Bjg2JVr4ZdWnM02NLAgubXpXrZB70CM1zGuYeYOAc0+4IqDtQrnbUrUuGcbT+GQmS07h7yyE0MbFaSBytHKwc1Cx+QGYcOmS9GB4zYebwJkHaXI/9z/RBsm2ZuuljOKQpWA+YjO5WMFdSejQOriaAbrXU54yQnHllpSLEiHJoeWD6Nh85dtkupB4XxbForYuIuMvLtNWwwOU09mws+Um3M/1aIO34OycSNHm8Siinmuc1m5f5kWh6gEQ2/tPstpXzNl18PkYcGEyFDYGQ2ABjRYD/wC+q7F9u6Bfbutd+NmEuiybJhgzl3kki4Y6gcRs5sM7A+y2JfbuuMVgeC0gFpBDgQCCCKEU6iiDxuDuIWT0oyK0jmoGxm9WRAPUKexuD7EL29AtUYrwPPyEw6Zwl5LD+KDUVArXlo7KK29PzDpW65yfi+YR8udkokOIL8mRPufKi8pb/UUG1NAlshda4ieM2HtGUGZJ/llx/cxF03+J03Mgsw/D4j3OqBEcS7lPvRo5RuXgIOh5RxvGXBxJk5Wop0cA6lP8xzSSf8DfdbhYwNAAAAAAAAyA6ADoFh3hfwnEw+VcIxHmxXBzg3PkAbRjOb8x/ESbeqnSpzLUoGpTUpqUvmbIF8zZL7d0vt3S+3dAvt3Vr7WUvkLK16BByoilFUHEhS+3dUiuyl9kC+yXyCXyCaBA0CWyCWyCW3QLbpbUpbUpbM3QLXXUj4VLPziQITj+qHDPcLt6lNSg+EpJQoY9ENkMezGtb2C+98zZL5myX27oF9u6X27pfbul8hZAvkLJoE0CaBA0C+czLw3jlexrx7Oa0j6FfS2QultSg6ULB5VmbZeCD+mFCHYLugUH/X0CWzN01KBqU1KalL5myBfM2S+3dL7d0vt3QL7d0vkLJfIWTQIGgV0CmgVtkgqqiqDiRXZS+QVPspoEDQJbIJbIJbdAtultSltSlszdAtmbpqU1KalA1KXzNkvmbJfbugX27pfbul9u6XyFkC+QsmgTQJoEDQJbIXS2QultSgW1KWzN0tmbpqUDUpqU1KXzNkC+Zsl9u6X27pfbugX27pfIWS+QsmgQNAmgTQJbIXQLZC6oy3UtqVRlugqqiqDiT0ClsgqT0Clt0C26W1KW1KWzN0C2ZumpTUpqUDUpfM2S+Zsl9u6Bfbul9u6X27pfIWQL5CyaBNAmgQNAlshdLZC6W1KBbUpbM3S2ZumpQNSmpTUpfM2QL5myX27pfbul9u6Bfbul8hZL5CyaBA0CaBNAlshdAtkLpbUpbUpbdAtuqB1KlsyqB1KCqoiDiT9VLbrkVAKZ9UEtmbpqVQOpQDqUE1KXzNlaVulK7d0Evt3S+3dU57IfZBL5CyaBU+wTQIJoEtkLq2tdKU1KCW1KWzN1QKZ9UA6lBNSmpVA6lKVugl8zZL7d1aV2Q57d0Evt3S+Qsqfboh9ggmgTQK6BLWQS2QultSrSmpQCm6CW3S2ZVA6lAOpQTUqjPMpSuZS+yC1VREERVEEQqogFERAUCqIIEVRAUVRBEVRBChVRAREQAoFUQRFUQRFUQRVEQQqoiCIiIP/Z',
              }}
            />
            <Title style={{alignSelf: 'center'}}> &emsp; 25%</Title>
          </View>
          <View style={styles.icons}>
            <Avatar.Image
              size={55}
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
            />
            <Title style={{alignSelf: 'center'}}> &emsp; 5%</Title>
          </View>
        </View>
        <View
          style={{
            borderLeftWidth: 1,
            borderLeftColor: 'grey',
          }}
        />
        <View
          style={{
            width: '50%',
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'row', height: 100}}>
            <Text style={{fontSize: 60, color: 'green'}}>4.5 &nbsp;</Text>
            <Text style={{alignSelf: 'center'}}>RATINGS</Text>
          </View>
          <Text>(121001)</Text>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'flex-start',
            }}>
            <View style={{flexDirection: 'row', height: 14, marginBottom: 23}}>
              <Title style={{height: 25}}>5 &nbsp;</Title>

              <Progress.Bar
                style={{top: 10}}
                progress={0.9}
                width={150}
                height={30}
                borderRadius={15}
                color={'green'}
              />
            </View>
            <View style={{flexDirection: 'row', height: 14, marginBottom: 23}}>
              <Title style={{height: 25}}>4 &nbsp;</Title>

              <Progress.Bar
                style={{top: 10}}
                progress={0.8}
                width={150}
                height={30}
                borderRadius={15}
                color={'green'}
              />
            </View>
            <View style={{flexDirection: 'row', height: 14, marginBottom: 23}}>
              <Title style={{height: 25}}>3 &nbsp;</Title>

              <Progress.Bar
                style={{top: 10}}
                progress={0.4}
                width={150}
                height={30}
                color={'orange'}
                borderRadius={15}
              />
            </View>
            <View style={{flexDirection: 'row', height: 14, marginBottom: 23}}>
              <Title style={{height: 25}}>2 &nbsp;</Title>

              <Progress.Bar
                style={{top: 10}}
                progress={0.3}
                width={150}
                height={30}
                borderRadius={15}
                color={'orange'}
              />
            </View>
            <View style={{flexDirection: 'row', height: 14, marginBottom: 23}}>
              <Title style={{height: 25}}>1 &nbsp;</Title>

              <Progress.Bar
                style={{top: 10}}
                progress={0.1}
                width={150}
                height={30}
                borderRadius={15}
                color={'red'}
              />
            </View>
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate(ReviewScreen)}
        title="See all reviews"
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 100,

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
  },
  title2: {
    left: 50,
    paddingTop: 40,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    left: 50,
  },
  progress: {
    width: '',
  },
});
