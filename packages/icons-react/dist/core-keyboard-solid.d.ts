import React from 'react';

export interface CoreKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKeyboardSolid: React.FC<CoreKeyboardSolidProps>;
export default CoreKeyboardSolid;
