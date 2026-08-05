import React from 'react';

export interface LanBeerMugEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugEmpty(props: LanBeerMugEmptyProps): React.ReactElement;
export default LanBeerMugEmpty;
