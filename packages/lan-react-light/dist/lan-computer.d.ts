import React from 'react';

export interface LanComputerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputer(props: LanComputerProps): React.ReactElement;
export default LanComputer;
