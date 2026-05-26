import React from 'react';

export interface LanFaceSmileRelaxedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileRelaxed: React.FC<LanFaceSmileRelaxedProps>;
export default LanFaceSmileRelaxed;
