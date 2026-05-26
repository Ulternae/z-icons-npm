import React from 'react';

export interface LanBorderCenterHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderCenterH: React.FC<LanBorderCenterHProps>;
export default LanBorderCenterH;
