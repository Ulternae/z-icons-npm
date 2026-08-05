import React from 'react';

export interface LanSolarPanelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarPanelSolid(props: LanSolarPanelSolidProps): React.ReactElement;
export default LanSolarPanelSolid;
