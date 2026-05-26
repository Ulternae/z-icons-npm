import React from 'react';

export interface LanKeyboardDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardDownRegular: React.FC<LanKeyboardDownRegularProps>;
export default LanKeyboardDownRegular;
