import React from 'react';

export interface NeoSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSidebar: React.FC<NeoSidebarProps>;
export default NeoSidebar;
