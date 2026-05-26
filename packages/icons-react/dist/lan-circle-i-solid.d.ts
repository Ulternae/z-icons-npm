import React from 'react';

export interface LanCircleISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleISolid: React.FC<LanCircleISolidProps>;
export default LanCircleISolid;
