import React from 'react';

export interface LanSpiralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiralRegular(props: LanSpiralRegularProps): React.ReactElement;
export default LanSpiralRegular;
