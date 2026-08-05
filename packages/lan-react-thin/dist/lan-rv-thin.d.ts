import React from 'react';

export interface LanRvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRvThin(props: LanRvThinProps): React.ReactElement;
export default LanRvThin;
