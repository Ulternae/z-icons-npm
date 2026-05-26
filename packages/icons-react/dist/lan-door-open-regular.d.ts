import React from 'react';

export interface LanDoorOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorOpenRegular: React.FC<LanDoorOpenRegularProps>;
export default LanDoorOpenRegular;
