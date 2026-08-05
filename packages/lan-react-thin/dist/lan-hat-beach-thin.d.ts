import React from 'react';

export interface LanHatBeachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatBeachThin(props: LanHatBeachThinProps): React.ReactElement;
export default LanHatBeachThin;
