import React from 'react';

export interface LanSolarPanelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarPanel: React.FC<LanSolarPanelProps>;
export default LanSolarPanel;
