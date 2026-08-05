import React from 'react';

export interface LanBookArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookArrowRight(props: LanBookArrowRightProps): React.ReactElement;
export default LanBookArrowRight;
