import React from 'react';

export interface LanReflectVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectVertical(props: LanReflectVerticalProps): React.ReactElement;
export default LanReflectVertical;
