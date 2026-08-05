import React from 'react';

export interface LanLuchadorMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLuchadorMaskSolid(props: LanLuchadorMaskSolidProps): React.ReactElement;
export default LanLuchadorMaskSolid;
