import React from 'react';

export interface LanBorderCenterHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderCenterHSolid: React.FC<LanBorderCenterHSolidProps>;
export default LanBorderCenterHSolid;
