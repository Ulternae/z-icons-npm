import React from 'react';

export interface LanReflectHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectHorizontalRegular(props: LanReflectHorizontalRegularProps): React.ReactElement;
export default LanReflectHorizontalRegular;
