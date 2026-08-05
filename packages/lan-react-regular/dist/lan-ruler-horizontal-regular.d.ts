import React from 'react';

export interface LanRulerHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerHorizontalRegular(props: LanRulerHorizontalRegularProps): React.ReactElement;
export default LanRulerHorizontalRegular;
