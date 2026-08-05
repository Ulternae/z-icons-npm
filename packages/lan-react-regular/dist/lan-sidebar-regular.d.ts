import React from 'react';

export interface LanSidebarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarRegular(props: LanSidebarRegularProps): React.ReactElement;
export default LanSidebarRegular;
