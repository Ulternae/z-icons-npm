import React from 'react';

export interface LanMaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMale: React.FC<LanMaleProps>;
export default LanMale;
