import React from 'react';

export interface LanAxeBattleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAxeBattleRegular: React.FC<LanAxeBattleRegularProps>;
export default LanAxeBattleRegular;
