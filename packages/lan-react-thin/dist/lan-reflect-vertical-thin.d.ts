import React from 'react';

export interface LanReflectVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectVerticalThin(props: LanReflectVerticalThinProps): React.ReactElement;
export default LanReflectVerticalThin;
