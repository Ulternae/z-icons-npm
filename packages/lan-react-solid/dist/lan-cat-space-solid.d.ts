import React from 'react';

export interface LanCatSpaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatSpaceSolid(props: LanCatSpaceSolidProps): React.ReactElement;
export default LanCatSpaceSolid;
