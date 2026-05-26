import React from 'react';

export interface LanCircleLariRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLariRegular: React.FC<LanCircleLariRegularProps>;
export default LanCircleLariRegular;
