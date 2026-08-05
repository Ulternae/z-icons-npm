import React from 'react';

export interface LanReflectVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectVerticalSolid(props: LanReflectVerticalSolidProps): React.ReactElement;
export default LanReflectVerticalSolid;
