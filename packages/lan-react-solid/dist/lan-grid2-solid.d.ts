import React from 'react';

export interface LanGrid2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2Solid(props: LanGrid2SolidProps): React.ReactElement;
export default LanGrid2Solid;
