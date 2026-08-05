import React from 'react';

export interface LanSteeringWheelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteeringWheelRegular(props: LanSteeringWheelRegularProps): React.ReactElement;
export default LanSteeringWheelRegular;
