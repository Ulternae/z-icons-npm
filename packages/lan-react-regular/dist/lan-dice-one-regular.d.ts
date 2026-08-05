import React from 'react';

export interface LanDiceOneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceOneRegular(props: LanDiceOneRegularProps): React.ReactElement;
export default LanDiceOneRegular;
