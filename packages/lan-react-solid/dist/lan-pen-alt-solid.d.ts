import React from 'react';

export interface LanPenAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenAltSolid(props: LanPenAltSolidProps): React.ReactElement;
export default LanPenAltSolid;
