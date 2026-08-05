import React from 'react';

export interface LanComputerMouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouseSolid(props: LanComputerMouseSolidProps): React.ReactElement;
export default LanComputerMouseSolid;
