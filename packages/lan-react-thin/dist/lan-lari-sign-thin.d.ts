import React from 'react';

export interface LanLariSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLariSignThin(props: LanLariSignThinProps): React.ReactElement;
export default LanLariSignThin;
