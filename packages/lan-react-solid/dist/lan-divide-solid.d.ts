import React from 'react';

export interface LanDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDivideSolid(props: LanDivideSolidProps): React.ReactElement;
export default LanDivideSolid;
