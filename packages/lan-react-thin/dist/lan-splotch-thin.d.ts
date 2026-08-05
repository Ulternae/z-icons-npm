import React from 'react';

export interface LanSplotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplotchThin(props: LanSplotchThinProps): React.ReactElement;
export default LanSplotchThin;
