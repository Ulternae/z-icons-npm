import React from 'react';

export interface NeoSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSidebar(props: NeoSidebarProps): React.ReactElement;
export default NeoSidebar;
