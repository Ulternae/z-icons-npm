import React from 'react';

export interface LanTabletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablets(props: LanTabletsProps): React.ReactElement;
export default LanTablets;
