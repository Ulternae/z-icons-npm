import React from 'react';

export interface LanPesoSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesoSignSolid(props: LanPesoSignSolidProps): React.ReactElement;
export default LanPesoSignSolid;
