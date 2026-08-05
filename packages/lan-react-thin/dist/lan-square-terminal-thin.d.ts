import React from 'react';

export interface LanSquareTerminalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTerminalThin(props: LanSquareTerminalThinProps): React.ReactElement;
export default LanSquareTerminalThin;
