import React from 'react';

export interface LanChestDrawersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestDrawers(props: LanChestDrawersProps): React.ReactElement;
export default LanChestDrawers;
