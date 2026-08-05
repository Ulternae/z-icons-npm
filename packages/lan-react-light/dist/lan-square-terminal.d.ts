import React from 'react';

export interface LanSquareTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTerminal(props: LanSquareTerminalProps): React.ReactElement;
export default LanSquareTerminal;
