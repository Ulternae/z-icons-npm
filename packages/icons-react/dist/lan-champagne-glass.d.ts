import React from 'react';

export interface LanChampagneGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChampagneGlass: React.FC<LanChampagneGlassProps>;
export default LanChampagneGlass;
