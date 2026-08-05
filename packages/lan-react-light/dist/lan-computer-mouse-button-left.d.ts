import React from 'react';

export interface LanComputerMouseButtonLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouseButtonLeft(props: LanComputerMouseButtonLeftProps): React.ReactElement;
export default LanComputerMouseButtonLeft;
