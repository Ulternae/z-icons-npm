import React from 'react';

export interface LanBorderCenterVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderCenterV: React.FC<LanBorderCenterVProps>;
export default LanBorderCenterV;
