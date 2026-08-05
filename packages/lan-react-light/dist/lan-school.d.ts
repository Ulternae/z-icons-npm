import React from 'react';

export interface LanSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchool(props: LanSchoolProps): React.ReactElement;
export default LanSchool;
