import React from 'react';

export interface LanChampagneGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChampagneGlassSolid: React.FC<LanChampagneGlassSolidProps>;
export default LanChampagneGlassSolid;
