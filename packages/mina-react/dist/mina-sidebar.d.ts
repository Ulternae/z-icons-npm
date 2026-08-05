import React from 'react';

export interface MinaSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSidebar(props: MinaSidebarProps): React.ReactElement;
export default MinaSidebar;
