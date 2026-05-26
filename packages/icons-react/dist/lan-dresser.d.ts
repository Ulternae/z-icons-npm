import React from 'react';

export interface LanDresserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDresser: React.FC<LanDresserProps>;
export default LanDresser;
