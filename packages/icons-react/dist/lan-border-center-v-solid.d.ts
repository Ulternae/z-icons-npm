import React from 'react';

export interface LanBorderCenterVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderCenterVSolid: React.FC<LanBorderCenterVSolidProps>;
export default LanBorderCenterVSolid;
