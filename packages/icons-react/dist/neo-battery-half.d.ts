import React from 'react';

export interface NeoBatteryHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBatteryHalf: React.FC<NeoBatteryHalfProps>;
export default NeoBatteryHalf;
