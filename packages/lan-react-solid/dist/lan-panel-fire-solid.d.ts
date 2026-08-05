import React from 'react';

export interface LanPanelFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanelFireSolid(props: LanPanelFireSolidProps): React.ReactElement;
export default LanPanelFireSolid;
