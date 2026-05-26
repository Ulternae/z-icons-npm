import React from 'react';

export interface LanCartCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCirclePlusRegular: React.FC<LanCartCirclePlusRegularProps>;
export default LanCartCirclePlusRegular;
