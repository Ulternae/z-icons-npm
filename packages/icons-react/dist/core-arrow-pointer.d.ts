import React from 'react';

export interface CoreArrowPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowPointer: React.FC<CoreArrowPointerProps>;
export default CoreArrowPointer;
