import React from 'react';

export interface LanPanelEwsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelEwsRegular(props: LanPanelEwsRegularProps): React.ReactElement;
export default LanPanelEwsRegular;
