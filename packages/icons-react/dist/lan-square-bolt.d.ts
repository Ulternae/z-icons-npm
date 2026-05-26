import React from 'react';

export interface LanSquareBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBolt: React.FC<LanSquareBoltProps>;
export default LanSquareBolt;
