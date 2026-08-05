import React from 'react';

export interface LanWeightHangingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWeightHangingSolid(props: LanWeightHangingSolidProps): React.ReactElement;
export default LanWeightHangingSolid;
