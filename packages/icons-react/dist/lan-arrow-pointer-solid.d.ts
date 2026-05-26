import React from 'react';

export interface LanArrowPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowPointerSolid: React.FC<LanArrowPointerSolidProps>;
export default LanArrowPointerSolid;
