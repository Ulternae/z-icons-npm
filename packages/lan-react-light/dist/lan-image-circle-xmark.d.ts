import React from 'react';

export interface LanImageCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCircleXmark(props: LanImageCircleXmarkProps): React.ReactElement;
export default LanImageCircleXmark;
