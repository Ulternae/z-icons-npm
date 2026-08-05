import React from 'react';

export interface LanSchoolFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolFlag(props: LanSchoolFlagProps): React.ReactElement;
export default LanSchoolFlag;
