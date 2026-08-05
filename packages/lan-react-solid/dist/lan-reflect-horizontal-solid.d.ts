import React from 'react';

export interface LanReflectHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectHorizontalSolid(props: LanReflectHorizontalSolidProps): React.ReactElement;
export default LanReflectHorizontalSolid;
