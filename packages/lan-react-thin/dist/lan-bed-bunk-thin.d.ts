import React from 'react';

export interface LanBedBunkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedBunkThin(props: LanBedBunkThinProps): React.ReactElement;
export default LanBedBunkThin;
