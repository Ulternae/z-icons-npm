import React from 'react';

export interface LanSquareTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTerminalRegular: React.FC<LanSquareTerminalRegularProps>;
export default LanSquareTerminalRegular;
