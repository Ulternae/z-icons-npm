import React from 'react';

export interface LanKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardRegular: React.FC<LanKeyboardRegularProps>;
export default LanKeyboardRegular;
