import React from 'react';

export interface CoreComputerClassicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreComputerClassicSolid: React.FC<CoreComputerClassicSolidProps>;
export default CoreComputerClassicSolid;
