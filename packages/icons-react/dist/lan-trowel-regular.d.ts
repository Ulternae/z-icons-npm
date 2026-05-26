import React from 'react';

export interface LanTrowelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelRegular: React.FC<LanTrowelRegularProps>;
export default LanTrowelRegular;
