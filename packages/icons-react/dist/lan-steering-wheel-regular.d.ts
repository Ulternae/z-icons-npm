import React from 'react';

export interface LanSteeringWheelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteeringWheelRegular: React.FC<LanSteeringWheelRegularProps>;
export default LanSteeringWheelRegular;
