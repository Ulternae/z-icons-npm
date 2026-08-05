import React from 'react';

export interface LanSidebarFlipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarFlipThin(props: LanSidebarFlipThinProps): React.ReactElement;
export default LanSidebarFlipThin;
