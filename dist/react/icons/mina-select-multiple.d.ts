import React from 'react';

export interface MinaSelectMultipleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSelectMultiple: React.FC<MinaSelectMultipleProps>;
export default MinaSelectMultiple;
