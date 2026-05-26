import React from 'react';

export interface LanGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlass: React.FC<LanGlassProps>;
export default LanGlass;
