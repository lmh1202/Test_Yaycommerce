import './App.css';
import { Button, Card, Input, List, Row, Space } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';



function App() {
  const data = [
    'Thái Bình Mồ Hôi Rơi - Sơn Tùng MTP',
    'Không Quan Tâm - Chi Dân',
    'Thương Em Là Điều Anh Không Thể Ngờ - Noo Phước Thịnh',
    'Tình Yêu Hoa Gió - Trương Thế Vinh'
  ]

  const [songList, setSongList] = useState(data)
  const [inputText, setInputText] = useState('')
  const [edit, setEdit] = useState<boolean>(false)
  const [songIndex, setSongIndex] = useState<number>(0);

  const onClickAddButton = () => {
    const newSongList = [...songList, inputText]
    setSongList(newSongList)
    setInputText('')
  }

  const onClickEditButton = () => {
    const newSongList = [...songList]
    newSongList[songIndex] = inputText;
    setSongList(newSongList)
    setEdit(false)
    setInputText('')
  }

  const handleSongDeleteButton = (index: number) => {
    const newSongList = [...songList]
    newSongList.splice(index, 1)
    setSongList(newSongList)
  }

  const handleSongEditButton = (item: string, index: number) => {
    setEdit(true)
    setSongIndex(index);
    setInputText(item);
  }

  return (
    <>
      <Space>
        <Card style={{ marginTop: 50, marginLeft: 350, }} >
          <Row>
            <Input
              style={{ width: 560, marginRight: 10 }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onPressEnter={edit ? onClickEditButton : onClickAddButton}
            />
            <Button
              style={{ width: 80, display: edit === true ? 'none' : 'block' }}
              type={'primary'}
              onClick={onClickAddButton}
            >
              Add
            </Button>
            <Button
              style={{ width: 80, display: edit === true ? 'block' : 'none' }}
              type={'primary'}
              onClick={onClickEditButton}
            >
              Edit
            </Button>
            <Button
              style={{ width: 20, marginLeft: 10, border: 'none' }}
            >
              <SearchOutlined />
            </Button>
          </Row>
          <List
            dataSource={songList}
            itemLayout="horizontal"
            renderItem={(item, index) =>
              <List.Item>
                <List.Item.Meta title={item} />
                <Button style={{ marginRight: 10 }} onClick={() => handleSongEditButton(item, index)}>Edit</Button>
                <Button onClick={() => handleSongDeleteButton(index)}>Delete</Button>
              </List.Item>}>
          </List>
        </Card>
      </Space>
    </>
  );
}

export default App;
