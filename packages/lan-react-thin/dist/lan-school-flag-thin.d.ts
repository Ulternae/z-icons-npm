import React from 'react';

export interface LanSchoolFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolFlagThin(props: LanSchoolFlagThinProps): React.ReactElement;
export default LanSchoolFlagThin;
