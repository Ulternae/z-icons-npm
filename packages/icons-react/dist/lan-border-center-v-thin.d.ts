import React from 'react';

export interface LanBorderCenterVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderCenterVThin: React.FC<LanBorderCenterVThinProps>;
export default LanBorderCenterVThin;
