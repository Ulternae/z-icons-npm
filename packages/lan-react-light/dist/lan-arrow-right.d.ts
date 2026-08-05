import React from 'react';

export interface LanArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowRight(props: LanArrowRightProps): React.ReactElement;
export default LanArrowRight;
