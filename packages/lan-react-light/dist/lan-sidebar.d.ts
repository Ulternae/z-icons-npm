import React from 'react';

export interface LanSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebar(props: LanSidebarProps): React.ReactElement;
export default LanSidebar;
