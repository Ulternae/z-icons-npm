import React from 'react';

export interface LanSidebarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarThin(props: LanSidebarThinProps): React.ReactElement;
export default LanSidebarThin;
