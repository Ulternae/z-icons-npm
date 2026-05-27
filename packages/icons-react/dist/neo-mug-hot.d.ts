import React from 'react';

export interface NeoMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMugHot: React.FC<NeoMugHotProps>;
export default NeoMugHot;
