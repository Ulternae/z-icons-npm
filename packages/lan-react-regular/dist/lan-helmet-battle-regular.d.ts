import React from 'react';

export interface LanHelmetBattleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetBattleRegular(props: LanHelmetBattleRegularProps): React.ReactElement;
export default LanHelmetBattleRegular;
