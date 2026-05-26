import React from 'react';

export interface LanTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTerminalSolid: React.FC<LanTerminalSolidProps>;
export default LanTerminalSolid;
