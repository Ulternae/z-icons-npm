import React from 'react';

export interface LanRulerHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerHorizontal(props: LanRulerHorizontalProps): React.ReactElement;
export default LanRulerHorizontal;
