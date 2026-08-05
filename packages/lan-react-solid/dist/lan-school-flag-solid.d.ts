import React from 'react';

export interface LanSchoolFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolFlagSolid(props: LanSchoolFlagSolidProps): React.ReactElement;
export default LanSchoolFlagSolid;
