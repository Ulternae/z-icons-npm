import React from 'react';

export interface LanWhistleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhistleSolid: React.FC<LanWhistleSolidProps>;
export default LanWhistleSolid;
