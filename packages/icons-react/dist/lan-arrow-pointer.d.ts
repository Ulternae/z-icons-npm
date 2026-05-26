import React from 'react';

export interface LanArrowPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowPointer: React.FC<LanArrowPointerProps>;
export default LanArrowPointer;
