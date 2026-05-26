import React from 'react';

export interface LanTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTerminalRegular: React.FC<LanTerminalRegularProps>;
export default LanTerminalRegular;
