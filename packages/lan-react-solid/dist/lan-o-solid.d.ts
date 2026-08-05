import React from 'react';

export interface LanOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOSolid(props: LanOSolidProps): React.ReactElement;
export default LanOSolid;
