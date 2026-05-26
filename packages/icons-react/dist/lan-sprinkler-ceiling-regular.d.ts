import React from 'react';

export interface LanSprinklerCeilingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerCeilingRegular: React.FC<LanSprinklerCeilingRegularProps>;
export default LanSprinklerCeilingRegular;
