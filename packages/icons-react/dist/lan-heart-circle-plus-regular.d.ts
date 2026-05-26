import React from 'react';

export interface LanHeartCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCirclePlusRegular: React.FC<LanHeartCirclePlusRegularProps>;
export default LanHeartCirclePlusRegular;
