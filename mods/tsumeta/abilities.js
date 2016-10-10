'use strict';

var scanIfBerry = item.isBerry;
var typeSuppresantBerries = ['occaberry','wacanberry','passhoberry','chilanberry','chopleberry','yacheberry','rindoberry','kasibberry','kebiaberry','shucaberry','cobaberry','chartiberry','tangaberry','payapaberry','habanberry','colburberry','habiriberry'];


exports.BattleAbilities = {
    "defeatist": {
        inherit: true,
        onModifyAtk: function (atk, pokemon) {
            if (pokemon.hp <= pokemon.maxhp / 4) {
                return this.chainModify(0.5);
            }
        },
        onModifySpA: function (atk, pokemon) {
            if (pokemon.hp <= pokemon.maxhp / 4) {
                return this.chainModify(0.5);
            }
        }
    },
    "gluttony": {
        inherit: true,
        onEatItem: function (item, pokemon) {
            if (!pokemon.volatiles['gluttony']) pokemon.addVolatile('gluttony');
switch (item.id) {
    case 'sitrusberry':
        this.heal(pokemon.maxhp / 2);
        break;

    case 'oranberry':
        this.heal(pokemon.maxhp + 20);
        break;

    case 'figyberry':
    case 'wikiberry':
    case 'magoberry':
    case 'iapapaberry':
    case 'aguavberry':
        //inherit: true,
            this.heal(pokemon.maxhp / 4);
        break;

    case 'occaberry':
    case 'passhoberry':
    case 'wacanberry':
    case 'rindoberry':
    case 'yacheberry':
    case 'chopleberry':
    case 'kebiaberry':
    case 'shucaberry':
    case 'cobaberry':
    case 'payapaberry':
    case 'tangaberry':
    case 'chartiberry':
    case 'chilanberry':
    case 'kasibberry':
    case 'habanberry':
    case 'colburberry':
    case 'habiriberry':
        //inherit: true,
		if (typeSupressantBerries.indexOf('occaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('passhoberry') > -1 { return this.chainModify(0.25);}
	    	if (typeSupressantBerries.indexOf('wacanberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('rindoberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('yacheberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('chopleberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('kebiaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('shucaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('cobaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('payapaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('tangaberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('chartiberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('chilanberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('kasibberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('habanberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('colburberry') > -1 { return this.chainModify(0.25);}
		if (typeSupressantBerries.indexOf('habiriberry') > -1 { return this.chainModify(0.25);}
        break;
	/*case 'custapberry':
		if (!pokemon.volatiles['custap']) pokemon.addVolatile('custap');
		effect: {
		duration: 2,
		onStart: function (target) {
		this.add('-start', target, 'ability: Gluttony');
		},
			onModifyAtkPriority: 6,
				onModifySpAPriority: 6,
		}*/
		
}
		


		
        },
        effect: {
          duration: 2,
          onStart: function (target) {
            this.add('-start', target, 'ability: Gluttony');
          },
          onModifySpe: function (spe, pokemon) {
    				return this.chainModify(0.66);
    			},
		onModifyAtk: function (atk, pokemon) {
			return this.chainModify(0.66);
		},
          onModifyAtkPriority: 6,
    		  onSourceModifyAtk: function (atk, attacker, defender, move) {
    			  if (move.type === 'Ice' || move.type === 'Fire') {
    				  this.debug('Gluttony weaken');
    				  return this.chainModify(0.5);
    			  }
    		  },
    		  onModifySpAPriority: 5,
    		  onSourceModifySpA: function (atk, attacker, defender, move) {
    			  if (move.type === 'Ice' || move.type === 'Fire') {
    				  this.debug('Gluttony weaken');
    				  return this.chainModify(0.5);
    			  }
    		  }
        }
    },
    "immunity": {
      inherit: true,
      shortDesc: "This Pokemon cannot be poisoned, burned or paralyzed. Gaining this Ability while poisoned, burned or paralyzed cures it.",
		  onUpdate: function (pokemon) {
			  if (pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par' || pokemon.status === 'brn') {
			    this.add('-activate', pokemon, 'ability: Immunity');
				  pokemon.cureStatus();
			  }
		  },
		  onSetStatus: function (status, target, source, effect) {
			  if (status.id !== 'psn' && status.id !== 'tox' || status.id !== 'brn' || status.id !== 'par') return;
			    if (!effect || !effect.status) return false;
			    this.add('-immune', target, '[msg]', '[from] ability: Immunity');
			    return false;
		    },
    },
    "turboblaze": {
      inherit: true,
      onModifyAtkPriority: 5,
		  onModifyAtk: function (atk, attacker, defender, move) {
			  if (move.type === 'Fire') {
				  this.debug('TurboBlaze boost');
				  return this.chainModify(1.5);
			  }
		  },
		  onModifySpAPriority: 5,
		  onModifySpA: function (atk, attacker, defender, move) {
			  if (move.type === 'Fire') {
				  this.debug('TurboBlaze boost');
				  return this.chainModify(1.5);
			  }
		  }
    },
    "teravolt": {
      inherit: true,
      onModifyAtkPriority: 5,
		  onModifyAtk: function (atk, attacker, defender, move) {
			  if (move.type === 'Electric') {
				  this.debug('Teravolt boost');
				  return this.chainModify(1.5);
			  }
		  },
		  onModifySpAPriority: 5,
		  onModifySpA: function (atk, attacker, defender, move) {
			  if (move.type === 'Electric') {
				  this.debug('Teravolt boost');
				  return this.chainModify(1.5);
			  }
		  }
    },
    "moldbreaker": {
      inherit: true,
      onHit: function (target, source, move) {
        if(move && move.effectType === 'Move') {
          this.chainModify(1.33);
        }
      },
      onModifyMove: function (move, pokemon) {
        if(move.basePower < 120 && pokemon.types.indexOf(move.type) > -1) this.chainModify(1.25);
      }
    },
    "unburden": {
      inherit: true,
      onAfterUseItem: function (item, pokemon) {
        if (pokemon !== this.effectData.target) return;
          pokemon.addVolatile('unburden');
        },
        onTakeItem: function (item, pokemon) {
          pokemon.addVolatile('unburden');
        },
        onEnd: function (pokemon) {
          pokemon.removeVolatile('unburden');
        },
        effect: {
          onModifySpe: function (spe, pokemon) {
            if (!pokemon.item) {
              return this.chainModify(1.5);
            }
          },
        },
    },
    "intimidate": {
      inherit: true,
      onStart: function (pokemon) {
        let foeactive = pokemon.side.foe.active;
        let activated = false;
        for (let i = 0; i < foeactive.length; i++) {
          if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
          if (!activated) {
            this.add('-ability', pokemon, 'Intimidate', 'boost');
            activated = true;
          }
          if (foeactive[i].volatiles['substitute'] || foeactive[i].ability === 'intimidate') {
            this.add('-immune', foeactive[i], '[msg]');
          } else {
            this.boost({atk: -1}, foeactive[i], pokemon);
            if(Math.floor(Math.random() * 99) < 20) this.boost({spe: -1}, foeactive[i], pokemon);
          }
        }
      },
    }

}
