import React from 'react';

export interface LanCrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrow(props: LanCrowProps): React.ReactElement;
export default LanCrow;
