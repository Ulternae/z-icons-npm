import React from 'react';

export interface LanMessageHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageHeartSolid: React.FC<LanMessageHeartSolidProps>;
export default LanMessageHeartSolid;
