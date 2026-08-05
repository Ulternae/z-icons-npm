import React from 'react';

export interface LanBeerMugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugRegular(props: LanBeerMugRegularProps): React.ReactElement;
export default LanBeerMugRegular;
