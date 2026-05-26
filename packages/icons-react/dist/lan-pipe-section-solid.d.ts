import React from 'react';

export interface LanPipeSectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSectionSolid: React.FC<LanPipeSectionSolidProps>;
export default LanPipeSectionSolid;
