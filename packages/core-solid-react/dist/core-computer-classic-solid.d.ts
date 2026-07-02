import React from 'react';

export interface CoreComputerClassicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreComputerClassicSolid(props: CoreComputerClassicSolidProps): React.ReactElement;
export default CoreComputerClassicSolid;
