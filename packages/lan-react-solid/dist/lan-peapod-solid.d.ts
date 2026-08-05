import React from 'react';

export interface LanPeapodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeapodSolid(props: LanPeapodSolidProps): React.ReactElement;
export default LanPeapodSolid;
