import React from 'react';

export interface LanComputerMouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouse(props: LanComputerMouseProps): React.ReactElement;
export default LanComputerMouse;
