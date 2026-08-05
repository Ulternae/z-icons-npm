import React from 'react';

export interface LanSchoolCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolCircleCheck(props: LanSchoolCircleCheckProps): React.ReactElement;
export default LanSchoolCircleCheck;
