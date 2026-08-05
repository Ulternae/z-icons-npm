import React from 'react';

export interface LanHandMiddleFingerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandMiddleFinger(props: LanHandMiddleFingerProps): React.ReactElement;
export default LanHandMiddleFinger;
