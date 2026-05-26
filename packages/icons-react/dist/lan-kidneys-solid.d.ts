import React from 'react';

export interface LanKidneysSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKidneysSolid: React.FC<LanKidneysSolidProps>;
export default LanKidneysSolid;
