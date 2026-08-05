import React from 'react';

export interface LanPenFieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFieldSolid(props: LanPenFieldSolidProps): React.ReactElement;
export default LanPenFieldSolid;
