import React from 'react';

export interface LanSolarPanelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarPanelThin: React.FC<LanSolarPanelThinProps>;
export default LanSolarPanelThin;
