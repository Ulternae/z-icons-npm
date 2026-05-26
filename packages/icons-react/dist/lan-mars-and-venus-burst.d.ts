import React from 'react';

export interface LanMarsAndVenusBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsAndVenusBurst: React.FC<LanMarsAndVenusBurstProps>;
export default LanMarsAndVenusBurst;
