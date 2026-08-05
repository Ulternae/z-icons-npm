import React from 'react';

export interface LanArrowPointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowPointerRegular(props: LanArrowPointerRegularProps): React.ReactElement;
export default LanArrowPointerRegular;
