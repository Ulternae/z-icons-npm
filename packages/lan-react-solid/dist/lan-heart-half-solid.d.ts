import React from 'react';

export interface LanHeartHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartHalfSolid(props: LanHeartHalfSolidProps): React.ReactElement;
export default LanHeartHalfSolid;
