import React from 'react';

export interface NeoSidebarFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSidebarFlip: React.FC<NeoSidebarFlipProps>;
export default NeoSidebarFlip;
