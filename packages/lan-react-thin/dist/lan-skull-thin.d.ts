import React from 'react';

export interface LanSkullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullThin(props: LanSkullThinProps): React.ReactElement;
export default LanSkullThin;
