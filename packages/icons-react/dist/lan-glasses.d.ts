import React from 'react';

export interface LanGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlasses: React.FC<LanGlassesProps>;
export default LanGlasses;
