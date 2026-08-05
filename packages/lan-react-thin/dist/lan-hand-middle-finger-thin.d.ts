import React from 'react';

export interface LanHandMiddleFingerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandMiddleFingerThin(props: LanHandMiddleFingerThinProps): React.ReactElement;
export default LanHandMiddleFingerThin;
