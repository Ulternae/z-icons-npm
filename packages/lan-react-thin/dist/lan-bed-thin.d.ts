import React from 'react';

export interface LanBedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedThin(props: LanBedThinProps): React.ReactElement;
export default LanBedThin;
