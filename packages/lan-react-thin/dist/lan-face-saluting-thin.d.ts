import React from 'react';

export interface LanFaceSalutingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSalutingThin(props: LanFaceSalutingThinProps): React.ReactElement;
export default LanFaceSalutingThin;
