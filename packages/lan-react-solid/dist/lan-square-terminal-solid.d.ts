import React from 'react';

export interface LanSquareTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTerminalSolid(props: LanSquareTerminalSolidProps): React.ReactElement;
export default LanSquareTerminalSolid;
