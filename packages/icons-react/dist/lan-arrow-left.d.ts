import React from 'react';

export interface LanArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowLeft: React.FC<LanArrowLeftProps>;
export default LanArrowLeft;
