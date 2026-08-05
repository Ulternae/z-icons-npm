import React from 'react';

export interface LanGrid3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid3Solid(props: LanGrid3SolidProps): React.ReactElement;
export default LanGrid3Solid;
