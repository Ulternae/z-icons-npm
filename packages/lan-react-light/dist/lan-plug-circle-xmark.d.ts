import React from 'react';

export interface LanPlugCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleXmark(props: LanPlugCircleXmarkProps): React.ReactElement;
export default LanPlugCircleXmark;
