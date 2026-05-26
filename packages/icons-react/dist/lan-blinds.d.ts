import React from 'react';

export interface LanBlindsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlinds: React.FC<LanBlindsProps>;
export default LanBlinds;
