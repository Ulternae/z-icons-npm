import React from 'react';

export interface LanAngleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngle(props: LanAngleProps): React.ReactElement;
export default LanAngle;
