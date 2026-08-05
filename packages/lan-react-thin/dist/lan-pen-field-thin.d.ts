import React from 'react';

export interface LanPenFieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFieldThin(props: LanPenFieldThinProps): React.ReactElement;
export default LanPenFieldThin;
