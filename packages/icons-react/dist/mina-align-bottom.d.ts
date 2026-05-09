import React from 'react';

export interface MinaAlignBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignBottom: React.FC<MinaAlignBottomProps>;
export default MinaAlignBottom;
