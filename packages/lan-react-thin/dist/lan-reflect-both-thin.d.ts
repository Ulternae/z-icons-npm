import React from 'react';

export interface LanReflectBothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectBothThin(props: LanReflectBothThinProps): React.ReactElement;
export default LanReflectBothThin;
