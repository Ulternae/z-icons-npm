import React from 'react';

export interface LanZapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZapThin(props: LanZapThinProps): React.ReactElement;
export default LanZapThin;
