import React from 'react';

export interface LanShirtTankTopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtTankTopRegular: React.FC<LanShirtTankTopRegularProps>;
export default LanShirtTankTopRegular;
