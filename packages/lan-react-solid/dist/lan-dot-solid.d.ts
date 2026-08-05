import React from 'react';

export interface LanDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDotSolid(props: LanDotSolidProps): React.ReactElement;
export default LanDotSolid;
