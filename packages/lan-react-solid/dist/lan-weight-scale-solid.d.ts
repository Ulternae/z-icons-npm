import React from 'react';

export interface LanWeightScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightScaleSolid(props: LanWeightScaleSolidProps): React.ReactElement;
export default LanWeightScaleSolid;
