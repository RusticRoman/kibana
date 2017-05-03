const _ = require('lodash');

module.exports = function Arg(config) {
  this.name = config.name;
  this.types = config.types || [];
  this.default = config.default;
  this.aliases = config.aliases || [];
  this.multi = this.multi == null ? false : this.multi;
  this.accepts = (type) => {
    if (!this.types.length) return true;
    return _.includes(config.types, type);
  };
};
