import React from 'react';

export interface CoreArrowPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowPointerSolid: React.FC<CoreArrowPointerSolidProps>;
export default CoreArrowPointerSolid;
