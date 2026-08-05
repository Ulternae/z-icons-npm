import React from 'react';

export interface LanHandFingersCrossedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandFingersCrossed(props: LanHandFingersCrossedProps): React.ReactElement;
export default LanHandFingersCrossed;
