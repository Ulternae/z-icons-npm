import React from 'react';

export interface LanH5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH5Thin: React.FC<LanH5ThinProps>;
export default LanH5Thin;
