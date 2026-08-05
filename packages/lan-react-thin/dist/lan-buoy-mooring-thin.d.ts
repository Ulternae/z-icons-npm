import React from 'react';

export interface LanBuoyMooringThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyMooringThin(props: LanBuoyMooringThinProps): React.ReactElement;
export default LanBuoyMooringThin;
