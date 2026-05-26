import React from 'react';

export interface LanPipeSectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSectionRegular: React.FC<LanPipeSectionRegularProps>;
export default LanPipeSectionRegular;
