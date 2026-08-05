import React from 'react';

export interface LanCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXmark(props: LanCircleXmarkProps): React.ReactElement;
export default LanCircleXmark;
