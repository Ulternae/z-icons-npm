import React from 'react';

export interface LanTowerControlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTowerControl: React.FC<LanTowerControlProps>;
export default LanTowerControl;
