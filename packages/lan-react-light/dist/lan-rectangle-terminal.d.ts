import React from 'react';

export interface LanRectangleTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTerminal(props: LanRectangleTerminalProps): React.ReactElement;
export default LanRectangleTerminal;
