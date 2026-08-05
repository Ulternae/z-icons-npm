import React from 'react';

export interface LanReflectHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectHorizontalThin(props: LanReflectHorizontalThinProps): React.ReactElement;
export default LanReflectHorizontalThin;
