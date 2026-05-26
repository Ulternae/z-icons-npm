import React from 'react';

export interface LanPipeSectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSectionThin: React.FC<LanPipeSectionThinProps>;
export default LanPipeSectionThin;
