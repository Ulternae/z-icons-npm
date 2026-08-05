import React from 'react';

export interface LanPopcornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopcorn(props: LanPopcornProps): React.ReactElement;
export default LanPopcorn;
