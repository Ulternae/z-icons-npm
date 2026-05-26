import React from 'react';

export interface LanCoffinCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinCrossRegular: React.FC<LanCoffinCrossRegularProps>;
export default LanCoffinCrossRegular;
