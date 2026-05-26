import React from 'react';

export interface LanKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardSolid: React.FC<LanKeyboardSolidProps>;
export default LanKeyboardSolid;
