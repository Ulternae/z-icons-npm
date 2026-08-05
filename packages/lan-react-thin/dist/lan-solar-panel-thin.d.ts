import React from 'react';

export interface LanSolarPanelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarPanelThin(props: LanSolarPanelThinProps): React.ReactElement;
export default LanSolarPanelThin;
