import React from 'react';

export interface LanSchoolCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolCircleXmark(props: LanSchoolCircleXmarkProps): React.ReactElement;
export default LanSchoolCircleXmark;
