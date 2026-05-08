import React from 'react';

export interface MinaSwatchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSwatches: React.FC<MinaSwatchesProps>;
export default MinaSwatches;
