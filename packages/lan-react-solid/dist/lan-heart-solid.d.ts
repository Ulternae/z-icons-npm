import React from 'react';

export interface LanHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSolid(props: LanHeartSolidProps): React.ReactElement;
export default LanHeartSolid;
