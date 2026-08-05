import React from 'react';

export interface LanRectangleTerminalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTerminalThin(props: LanRectangleTerminalThinProps): React.ReactElement;
export default LanRectangleTerminalThin;
