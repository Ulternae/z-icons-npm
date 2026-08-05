import React from 'react';

export interface LanMushroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMushroomThin(props: LanMushroomThinProps): React.ReactElement;
export default LanMushroomThin;
