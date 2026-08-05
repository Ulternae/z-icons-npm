import React from 'react';

export interface LanPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSolid(props: LanPenSolidProps): React.ReactElement;
export default LanPenSolid;
