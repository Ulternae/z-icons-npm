import React from 'react';

export interface LanAxeBattleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeBattle(props: LanAxeBattleProps): React.ReactElement;
export default LanAxeBattle;
