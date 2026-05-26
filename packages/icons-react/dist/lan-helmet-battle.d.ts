import React from 'react';

export interface LanHelmetBattleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetBattle: React.FC<LanHelmetBattleProps>;
export default LanHelmetBattle;
