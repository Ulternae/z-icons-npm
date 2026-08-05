import React from 'react';

export interface LanSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolThin(props: LanSchoolThinProps): React.ReactElement;
export default LanSchoolThin;
