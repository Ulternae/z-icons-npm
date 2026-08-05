import React from 'react';

export interface LanReflectVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectVerticalRegular(props: LanReflectVerticalRegularProps): React.ReactElement;
export default LanReflectVerticalRegular;
