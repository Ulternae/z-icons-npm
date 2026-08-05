import React from 'react';

export interface NeoSidebarFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSidebarFlip(props: NeoSidebarFlipProps): React.ReactElement;
export default NeoSidebarFlip;
