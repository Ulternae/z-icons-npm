import React from 'react';

export interface MinaAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignLeft: React.FC<MinaAlignLeftProps>;
export default MinaAlignLeft;
