import React from 'react';

export interface LanDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDSolid(props: LanDSolidProps): React.ReactElement;
export default LanDSolid;
