import React from 'react';

export interface LanReflectBothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectBothSolid(props: LanReflectBothSolidProps): React.ReactElement;
export default LanReflectBothSolid;
