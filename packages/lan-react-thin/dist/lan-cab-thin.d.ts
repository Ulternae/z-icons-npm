import React from 'react';

export interface LanCabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabThin(props: LanCabThinProps): React.ReactElement;
export default LanCabThin;
