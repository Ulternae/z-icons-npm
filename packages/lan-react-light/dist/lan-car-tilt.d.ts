import React from 'react';

export interface LanCarTiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTilt(props: LanCarTiltProps): React.ReactElement;
export default LanCarTilt;
