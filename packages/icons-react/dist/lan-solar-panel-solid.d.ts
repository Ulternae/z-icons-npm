import React from 'react';

export interface LanSolarPanelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarPanelSolid: React.FC<LanSolarPanelSolidProps>;
export default LanSolarPanelSolid;
