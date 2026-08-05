import React from 'react';

export interface LanReflectHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectHorizontal(props: LanReflectHorizontalProps): React.ReactElement;
export default LanReflectHorizontal;
