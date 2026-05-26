import React from 'react';

export interface LanHelmetBattleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelmetBattleRegular: React.FC<LanHelmetBattleRegularProps>;
export default LanHelmetBattleRegular;
