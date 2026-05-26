import React from 'react';

export interface LanTerminalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTerminalThin: React.FC<LanTerminalThinProps>;
export default LanTerminalThin;
