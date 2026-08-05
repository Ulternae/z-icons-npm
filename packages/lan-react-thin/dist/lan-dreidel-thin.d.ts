import React from 'react';

export interface LanDreidelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDreidelThin(props: LanDreidelThinProps): React.ReactElement;
export default LanDreidelThin;
