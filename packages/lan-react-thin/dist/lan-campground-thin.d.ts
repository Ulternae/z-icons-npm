import React from 'react';

export interface LanCampgroundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampgroundThin(props: LanCampgroundThinProps): React.ReactElement;
export default LanCampgroundThin;
