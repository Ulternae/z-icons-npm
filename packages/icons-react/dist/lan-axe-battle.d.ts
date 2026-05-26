import React from 'react';

export interface LanAxeBattleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeBattle: React.FC<LanAxeBattleProps>;
export default LanAxeBattle;
