import React from 'react';

export interface LanHandHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHeartSolid: React.FC<LanHandHeartSolidProps>;
export default LanHandHeartSolid;
