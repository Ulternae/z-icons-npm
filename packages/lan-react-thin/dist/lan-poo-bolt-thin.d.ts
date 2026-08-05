import React from 'react';

export interface LanPooBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooBoltThin(props: LanPooBoltThinProps): React.ReactElement;
export default LanPooBoltThin;
