import React from 'react';

export interface LanCarTiltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTiltRegular(props: LanCarTiltRegularProps): React.ReactElement;
export default LanCarTiltRegular;
