import React from 'react';

export interface MinaAlignTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignTop: React.FC<MinaAlignTopProps>;
export default MinaAlignTop;
