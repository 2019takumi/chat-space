# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|options|
|------|----|-------|
|name|string|nul: false, index :true|
|email|string|nul:false|
|password|string|nul:false|

### Association
- has_many :groups_users
- has_many :messeages
- has_many :groups, through: :groups_users

## messagesテーブル
|Column|Type|options|
|------|----|-------|
|text|text||
|image|string||
|user|references|null :false, foreign_key: true|
|group|references|null :false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Colum|Type|options|
|-----|----|-------|
|name|string|nul:false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :users, through: :groups_users

## groups_users テーブル
|Colum|Type|options|
|-----|----|-------|
|group_id|references|foreign_key: true|
|user_id|references|foreign_key: key|

### Association
- belongs_to :group
- belongs_to :user
