import React from 'react';

export interface LanCardHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardHeartSolid(props: LanCardHeartSolidProps): React.ReactElement;
export default LanCardHeartSolid;
