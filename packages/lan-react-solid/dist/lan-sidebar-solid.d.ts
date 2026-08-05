import React from 'react';

export interface LanSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarSolid(props: LanSidebarSolidProps): React.ReactElement;
export default LanSidebarSolid;
