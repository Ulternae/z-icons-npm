import React from 'react';

export interface LanTarpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpSolid(props: LanTarpSolidProps): React.ReactElement;
export default LanTarpSolid;
