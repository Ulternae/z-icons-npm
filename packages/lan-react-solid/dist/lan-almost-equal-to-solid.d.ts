import React from 'react';

export interface LanAlmostEqualToSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlmostEqualToSolid(props: LanAlmostEqualToSolidProps): React.ReactElement;
export default LanAlmostEqualToSolid;
