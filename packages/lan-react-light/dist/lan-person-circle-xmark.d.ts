import React from 'react';

export interface LanPersonCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleXmark(props: LanPersonCircleXmarkProps): React.ReactElement;
export default LanPersonCircleXmark;
