import React from 'react';

export interface LanSolarPanelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarPanel(props: LanSolarPanelProps): React.ReactElement;
export default LanSolarPanel;
