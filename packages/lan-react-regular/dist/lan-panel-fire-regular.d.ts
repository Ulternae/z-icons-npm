import React from 'react';

export interface LanPanelFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelFireRegular(props: LanPanelFireRegularProps): React.ReactElement;
export default LanPanelFireRegular;
