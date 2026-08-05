import React from 'react';

export interface LanDittoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDittoSolid(props: LanDittoSolidProps): React.ReactElement;
export default LanDittoSolid;
