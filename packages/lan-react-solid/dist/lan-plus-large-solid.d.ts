import React from 'react';

export interface LanPlusLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusLargeSolid(props: LanPlusLargeSolidProps): React.ReactElement;
export default LanPlusLargeSolid;
