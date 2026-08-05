import React from 'react';

export interface LanSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolRegular(props: LanSchoolRegularProps): React.ReactElement;
export default LanSchoolRegular;
