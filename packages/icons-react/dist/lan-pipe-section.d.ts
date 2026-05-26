import React from 'react';

export interface LanPipeSectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSection: React.FC<LanPipeSectionProps>;
export default LanPipeSection;
