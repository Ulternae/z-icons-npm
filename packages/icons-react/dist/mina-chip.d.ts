import React from 'react';

export interface MinaChipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChip: React.FC<MinaChipProps>;
export default MinaChip;
