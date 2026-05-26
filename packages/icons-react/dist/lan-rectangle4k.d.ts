import React from 'react';

export interface LanRectangle4kProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangle4k: React.FC<LanRectangle4kProps>;
export default LanRectangle4k;
