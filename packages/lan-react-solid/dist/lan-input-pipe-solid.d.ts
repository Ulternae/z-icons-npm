import React from 'react';

export interface LanInputPipeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPipeSolid(props: LanInputPipeSolidProps): React.ReactElement;
export default LanInputPipeSolid;
