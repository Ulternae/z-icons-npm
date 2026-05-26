import React from 'react';

export interface LanCruzeiroSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCruzeiroSignRegular: React.FC<LanCruzeiroSignRegularProps>;
export default LanCruzeiroSignRegular;
