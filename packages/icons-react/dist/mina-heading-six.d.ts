import React from 'react';

export interface MinaHeadingSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingSix: React.FC<MinaHeadingSixProps>;
export default MinaHeadingSix;
