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

## userテーブル
|Column|Type|options|
|------|----|-------|
|user_name|string|nul: false|
|email|string|nul:false|
|password|string|nul:false|
|created_at|data||

### Association
- has_many :groups_users
- has_many :messeage

## messageテーブル
|Column|Type|options|
|------|----|-------|
|message|string|nul: false|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
|created_at|data||

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Colum|Type|options|
|-----|----|-------|
|group_name|string|nul:false|
|created_at|data||

### Association
- has_many :groups_users
- has_many :message

## groups_users テーブル
|Colum|Type|options|
|-----|----|-------|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: key|

### Association
- belongs_to :group
- belongs_to :user
