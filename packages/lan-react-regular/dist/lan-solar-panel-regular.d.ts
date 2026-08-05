import React from 'react';

export interface LanSolarPanelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarPanelRegular(props: LanSolarPanelRegularProps): React.ReactElement;
export default LanSolarPanelRegular;
