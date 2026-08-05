import React from 'react';

export interface LanThetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThetaRegular(props: LanThetaRegularProps): React.ReactElement;
export default LanThetaRegular;
