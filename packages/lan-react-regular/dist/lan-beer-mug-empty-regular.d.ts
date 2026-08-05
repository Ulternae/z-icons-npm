import React from 'react';

export interface LanBeerMugEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugEmptyRegular(props: LanBeerMugEmptyRegularProps): React.ReactElement;
export default LanBeerMugEmptyRegular;
