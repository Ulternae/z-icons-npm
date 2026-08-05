import React from 'react';

export interface LanFileTexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTexThin(props: LanFileTexThinProps): React.ReactElement;
export default LanFileTexThin;
