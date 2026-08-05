import React from 'react';

export interface LanBeerMugEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugEmptyThin(props: LanBeerMugEmptyThinProps): React.ReactElement;
export default LanBeerMugEmptyThin;
