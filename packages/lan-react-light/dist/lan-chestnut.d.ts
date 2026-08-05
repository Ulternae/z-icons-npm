import React from 'react';

export interface LanChestnutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestnut(props: LanChestnutProps): React.ReactElement;
export default LanChestnut;
