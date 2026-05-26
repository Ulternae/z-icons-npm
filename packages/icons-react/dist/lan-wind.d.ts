import React from 'react';

export interface LanWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWind: React.FC<LanWindProps>;
export default LanWind;
