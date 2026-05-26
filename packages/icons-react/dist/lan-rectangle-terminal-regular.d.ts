import React from 'react';

export interface LanRectangleTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTerminalRegular: React.FC<LanRectangleTerminalRegularProps>;
export default LanRectangleTerminalRegular;
