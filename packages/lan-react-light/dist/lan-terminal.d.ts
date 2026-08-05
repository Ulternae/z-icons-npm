import React from 'react';

export interface LanTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTerminal(props: LanTerminalProps): React.ReactElement;
export default LanTerminal;
