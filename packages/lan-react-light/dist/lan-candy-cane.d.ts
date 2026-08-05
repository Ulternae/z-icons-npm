import React from 'react';

export interface LanCandyCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCane(props: LanCandyCaneProps): React.ReactElement;
export default LanCandyCane;
