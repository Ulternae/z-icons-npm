import React from 'react';

export interface LanTerminalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTerminalThin(props: LanTerminalThinProps): React.ReactElement;
export default LanTerminalThin;
