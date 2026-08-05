import React from 'react';

export interface LanParachuteBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParachuteBoxThin(props: LanParachuteBoxThinProps): React.ReactElement;
export default LanParachuteBoxThin;
