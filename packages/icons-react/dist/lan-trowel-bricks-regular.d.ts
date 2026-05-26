import React from 'react';

export interface LanTrowelBricksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelBricksRegular: React.FC<LanTrowelBricksRegularProps>;
export default LanTrowelBricksRegular;
