import React from 'react';

export interface LanSeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatThin(props: LanSeatThinProps): React.ReactElement;
export default LanSeatThin;
