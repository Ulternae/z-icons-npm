import React from 'react';

export interface LanHelmetBattleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetBattle(props: LanHelmetBattleProps): React.ReactElement;
export default LanHelmetBattle;
