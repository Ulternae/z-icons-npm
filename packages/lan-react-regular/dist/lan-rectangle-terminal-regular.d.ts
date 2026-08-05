import React from 'react';

export interface LanRectangleTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTerminalRegular(props: LanRectangleTerminalRegularProps): React.ReactElement;
export default LanRectangleTerminalRegular;
