import React from 'react';

export interface LanHouseTsunamiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTsunami(props: LanHouseTsunamiProps): React.ReactElement;
export default LanHouseTsunami;
