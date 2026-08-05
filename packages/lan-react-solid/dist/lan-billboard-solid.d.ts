import React from 'react';

export interface LanBillboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBillboardSolid(props: LanBillboardSolidProps): React.ReactElement;
export default LanBillboardSolid;
