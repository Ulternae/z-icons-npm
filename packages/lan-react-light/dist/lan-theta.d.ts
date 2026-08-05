import React from 'react';

export interface LanThetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTheta(props: LanThetaProps): React.ReactElement;
export default LanTheta;
