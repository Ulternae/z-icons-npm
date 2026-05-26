import React from 'react';

export interface LanCassetteVhsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteVhsSolid: React.FC<LanCassetteVhsSolidProps>;
export default LanCassetteVhsSolid;
