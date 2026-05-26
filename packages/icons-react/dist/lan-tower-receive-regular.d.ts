import React from 'react';

export interface LanTowerReceiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerReceiveRegular: React.FC<LanTowerReceiveRegularProps>;
export default LanTowerReceiveRegular;
