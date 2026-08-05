import React from 'react';

export interface LanCarWashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWashThin(props: LanCarWashThinProps): React.ReactElement;
export default LanCarWashThin;
