import React from 'react';

export interface LanFilterCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterCircleXmark(props: LanFilterCircleXmarkProps): React.ReactElement;
export default LanFilterCircleXmark;
