/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 30;

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    avatar: {
      type: 'string',
    },
    email: {
      required: true,
      unique: true,
      type: 'string',
      isEmail: true,
    },

    password: {
      required: true,
      minLength: PASSWORD_MIN_LENGTH,
      maxLength: PASSWORD_MAX_LENGTH,
      type: 'string',
    },
  },
  customToJSON: function(){
    return _.omit(this, ['password'])
  },
  datastores: 'default',
  validationMessages: {
    email: {
      required: 'Email address is required.',
      email: 'Email address is not valid.',
      unique: 'Email address already exists'
    },
    password: {
      required: 'Password is required.',
      minLength: `Password is too short (min ${PASSWORD_MIN_LENGTH} characters).`,
      maxLength: `Password is too long (max ${PASSWORD_MAX_LENGTH} characters).`,
    },
  },

  beforeCreate(attrs, next) {
    PasswordService.encryptPassword(attrs.password).then( password => {
      attrs.password = password;
      next();
    });
  },

  add(attrs, next) {
     const payload = {
       firstName: String(attrs.firstName).trim(),
       email: String(attrs.lastName).trim(),
       avatar: attrs.avatar,
       password: String(attrs.password).trim(),
     };
     return this.beforeCreate(payload).exec(next);
   }

};

