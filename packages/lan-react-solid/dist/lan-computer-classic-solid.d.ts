import React from 'react';

export interface LanComputerClassicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerClassicSolid(props: LanComputerClassicSolidProps): React.ReactElement;
export default LanComputerClassicSolid;
