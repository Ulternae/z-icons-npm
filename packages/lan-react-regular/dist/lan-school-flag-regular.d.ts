import React from 'react';

export interface LanSchoolFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolFlagRegular(props: LanSchoolFlagRegularProps): React.ReactElement;
export default LanSchoolFlagRegular;
