import React from 'react';

export interface LanPanelFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelFire(props: LanPanelFireProps): React.ReactElement;
export default LanPanelFire;
