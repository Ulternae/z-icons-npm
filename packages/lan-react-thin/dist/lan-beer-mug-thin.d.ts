import React from 'react';

export interface LanBeerMugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugThin(props: LanBeerMugThinProps): React.ReactElement;
export default LanBeerMugThin;
