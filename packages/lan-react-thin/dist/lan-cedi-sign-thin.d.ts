import React from 'react';

export interface LanCediSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCediSignThin(props: LanCediSignThinProps): React.ReactElement;
export default LanCediSignThin;
