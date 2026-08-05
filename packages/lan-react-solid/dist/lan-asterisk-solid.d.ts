import React from 'react';

export interface LanAsteriskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAsteriskSolid(props: LanAsteriskSolidProps): React.ReactElement;
export default LanAsteriskSolid;
