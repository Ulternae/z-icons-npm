import React from 'react';

export interface LanFileUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileUserThin(props: LanFileUserThinProps): React.ReactElement;
export default LanFileUserThin;
