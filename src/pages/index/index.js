import * as React from 'react';
import { View } from 'remax/ali';
import styles from './index.css';
import { createHostComponent } from 'remax/macro';
const Button = createHostComponent('button', [
  'type',
  // 支持传入一个数组来做属性别名
  ['class', 'className'],
]);
const Select = createHostComponent('select', [
  'defaultValue',
  'showSearch',
  'hasClear',
  // 支持传入一个数组来做属性别名
  ['class', 'className'],
]);
const Option = createHostComponent('option', [
  'value',
  // 支持传入一个数组来做属性别名
  ['class', 'className'],
]);
export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Button type="normal" >我是按钮</Button>
        <Select defaultValue="jack" showSearch hasClear>
            <Option value="jack">Jack</Option>
            <Option value="frank">Frank</Option>
            <Option value="hugo">Hugo</Option>
        </Select>
      </View>
    </View>
  );
};
