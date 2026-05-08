import React from 'react';

export interface MinaAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignRight: React.FC<MinaAlignRightProps>;
export default MinaAlignRight;
