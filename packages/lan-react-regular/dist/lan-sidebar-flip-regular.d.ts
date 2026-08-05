import React from 'react';

export interface LanSidebarFlipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSidebarFlipRegular(props: LanSidebarFlipRegularProps): React.ReactElement;
export default LanSidebarFlipRegular;
