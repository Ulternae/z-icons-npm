import React from 'react';

export interface LanInputPipeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPipeSolid: React.FC<LanInputPipeSolidProps>;
export default LanInputPipeSolid;
