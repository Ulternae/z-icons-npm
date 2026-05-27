import React from 'react';

export interface NeoSlidersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSliders: React.FC<NeoSlidersProps>;
export default NeoSliders;
