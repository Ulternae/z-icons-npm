import React from 'react';

export interface LanBeerMugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMug(props: LanBeerMugProps): React.ReactElement;
export default LanBeerMug;
