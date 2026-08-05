import React from 'react';

export interface LanDongSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDongSignThin(props: LanDongSignThinProps): React.ReactElement;
export default LanDongSignThin;
