import React from 'react';

export interface LanTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTerminalSolid(props: LanTerminalSolidProps): React.ReactElement;
export default LanTerminalSolid;
