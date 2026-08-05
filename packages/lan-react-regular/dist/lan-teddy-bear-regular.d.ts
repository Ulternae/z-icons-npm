import React from 'react';

export interface LanTeddyBearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeddyBearRegular(props: LanTeddyBearRegularProps): React.ReactElement;
export default LanTeddyBearRegular;
