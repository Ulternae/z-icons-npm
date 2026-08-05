import React from 'react';

export interface LanPenSwirlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSwirlSolid(props: LanPenSwirlSolidProps): React.ReactElement;
export default LanPenSwirlSolid;
