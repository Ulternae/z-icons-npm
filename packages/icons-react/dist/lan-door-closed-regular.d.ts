import React from 'react';

export interface LanDoorClosedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorClosedRegular: React.FC<LanDoorClosedRegularProps>;
export default LanDoorClosedRegular;
