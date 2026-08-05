import React from 'react';

export interface LanPipeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSolid(props: LanPipeSolidProps): React.ReactElement;
export default LanPipeSolid;
