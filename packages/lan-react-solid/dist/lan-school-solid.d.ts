import React from 'react';

export interface LanSchoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolSolid(props: LanSchoolSolidProps): React.ReactElement;
export default LanSchoolSolid;
