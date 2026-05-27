import React from 'react';

export interface CoreSlidersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSliders: React.FC<CoreSlidersProps>;
export default CoreSliders;
