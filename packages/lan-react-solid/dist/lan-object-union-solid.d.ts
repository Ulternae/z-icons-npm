import React from 'react';

export interface LanObjectUnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUnionSolid(props: LanObjectUnionSolidProps): React.ReactElement;
export default LanObjectUnionSolid;
