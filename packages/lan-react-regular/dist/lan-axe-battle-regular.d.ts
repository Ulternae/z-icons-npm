import React from 'react';

export interface LanAxeBattleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeBattleRegular(props: LanAxeBattleRegularProps): React.ReactElement;
export default LanAxeBattleRegular;
