import React from 'react';

export interface LanRaygunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaygun: React.FC<LanRaygunProps>;
export default LanRaygun;
