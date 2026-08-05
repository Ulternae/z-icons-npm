import React from 'react';

export interface LanSidebarFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarFlip(props: LanSidebarFlipProps): React.ReactElement;
export default LanSidebarFlip;
