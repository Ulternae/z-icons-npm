import React from 'react';

export interface LanPentagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPentagonSolid(props: LanPentagonSolidProps): React.ReactElement;
export default LanPentagonSolid;
