import React from 'react';

export interface LanBoxHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxHeartSolid(props: LanBoxHeartSolidProps): React.ReactElement;
export default LanBoxHeartSolid;
