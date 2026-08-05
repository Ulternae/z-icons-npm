import React from 'react';

export interface LanRectangleTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleTerminalSolid(props: LanRectangleTerminalSolidProps): React.ReactElement;
export default LanRectangleTerminalSolid;
