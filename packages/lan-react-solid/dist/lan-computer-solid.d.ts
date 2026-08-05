import React from 'react';

export interface LanComputerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerSolid(props: LanComputerSolidProps): React.ReactElement;
export default LanComputerSolid;
