import React from 'react';

export interface MinaArrowLongDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowLongDown: React.FC<MinaArrowLongDownProps>;
export default MinaArrowLongDown;
