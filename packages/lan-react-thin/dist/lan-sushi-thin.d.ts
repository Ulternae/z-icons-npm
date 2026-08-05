import React from 'react';

export interface LanSushiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSushiThin(props: LanSushiThinProps): React.ReactElement;
export default LanSushiThin;
