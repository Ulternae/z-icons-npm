import React from 'react';

export interface LanPesetaSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesetaSignSolid(props: LanPesetaSignSolidProps): React.ReactElement;
export default LanPesetaSignSolid;
