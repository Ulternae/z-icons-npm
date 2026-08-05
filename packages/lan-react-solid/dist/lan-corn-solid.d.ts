import React from 'react';

export interface LanCornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornSolid(props: LanCornSolidProps): React.ReactElement;
export default LanCornSolid;
