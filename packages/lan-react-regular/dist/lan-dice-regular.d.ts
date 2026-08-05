import React from 'react';

export interface LanDiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceRegular(props: LanDiceRegularProps): React.ReactElement;
export default LanDiceRegular;
