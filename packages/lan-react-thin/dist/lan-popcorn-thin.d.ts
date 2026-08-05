import React from 'react';

export interface LanPopcornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopcornThin(props: LanPopcornThinProps): React.ReactElement;
export default LanPopcornThin;
