import React from 'react';

export interface MinaKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaKeyboardSolid: React.FC<MinaKeyboardSolidProps>;
export default MinaKeyboardSolid;
