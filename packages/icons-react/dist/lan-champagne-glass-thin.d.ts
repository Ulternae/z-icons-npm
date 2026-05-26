import React from 'react';

export interface LanChampagneGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChampagneGlassThin: React.FC<LanChampagneGlassThinProps>;
export default LanChampagneGlassThin;
