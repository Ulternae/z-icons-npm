import React from 'react';

export interface LanStreetViewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStreetViewThin(props: LanStreetViewThinProps): React.ReactElement;
export default LanStreetViewThin;
