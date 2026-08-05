import React from 'react';

export interface LanZapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZap(props: LanZapProps): React.ReactElement;
export default LanZap;
