import React from 'react';

export interface LanFileCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleXmark(props: LanFileCircleXmarkProps): React.ReactElement;
export default LanFileCircleXmark;
