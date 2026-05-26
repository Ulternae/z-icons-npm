import React from 'react';

export interface LanBookHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookHeartSolid: React.FC<LanBookHeartSolidProps>;
export default LanBookHeartSolid;
