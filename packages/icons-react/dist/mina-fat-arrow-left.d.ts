import React from 'react';

export interface MinaFatArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFatArrowLeft: React.FC<MinaFatArrowLeftProps>;
export default MinaFatArrowLeft;
