import React from 'react';

export interface LanGrid4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid4Solid(props: LanGrid4SolidProps): React.ReactElement;
export default LanGrid4Solid;
