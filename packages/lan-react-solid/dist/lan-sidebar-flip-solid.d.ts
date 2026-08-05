import React from 'react';

export interface LanSidebarFlipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarFlipSolid(props: LanSidebarFlipSolidProps): React.ReactElement;
export default LanSidebarFlipSolid;
