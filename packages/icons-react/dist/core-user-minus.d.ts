import React from 'react';

export interface CoreUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserMinus: React.FC<CoreUserMinusProps>;
export default CoreUserMinus;
