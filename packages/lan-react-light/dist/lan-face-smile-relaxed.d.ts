import React from 'react';

export interface LanFaceSmileRelaxedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileRelaxed(props: LanFaceSmileRelaxedProps): React.ReactElement;
export default LanFaceSmileRelaxed;
