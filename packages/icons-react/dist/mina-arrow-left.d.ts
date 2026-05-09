import React from 'react';

export interface MinaArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowLeft: React.FC<MinaArrowLeftProps>;
export default MinaArrowLeft;
