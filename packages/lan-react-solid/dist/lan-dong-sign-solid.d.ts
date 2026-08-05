import React from 'react';

export interface LanDongSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDongSignSolid(props: LanDongSignSolidProps): React.ReactElement;
export default LanDongSignSolid;
