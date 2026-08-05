import React from 'react';

export interface LanHouseTsunamiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTsunamiThin(props: LanHouseTsunamiThinProps): React.ReactElement;
export default LanHouseTsunamiThin;
