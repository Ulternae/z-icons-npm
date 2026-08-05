import React from 'react';

export interface LanPanelEwsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelEwsSolid(props: LanPanelEwsSolidProps): React.ReactElement;
export default LanPanelEwsSolid;
