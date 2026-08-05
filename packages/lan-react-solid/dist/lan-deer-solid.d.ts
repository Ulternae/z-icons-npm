import React from 'react';

export interface LanDeerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeerSolid(props: LanDeerSolidProps): React.ReactElement;
export default LanDeerSolid;
