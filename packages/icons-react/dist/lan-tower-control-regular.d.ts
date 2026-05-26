import React from 'react';

export interface LanTowerControlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerControlRegular: React.FC<LanTowerControlRegularProps>;
export default LanTowerControlRegular;
