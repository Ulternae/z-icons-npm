import React from 'react';

export interface LanReflectBothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectBoth(props: LanReflectBothProps): React.ReactElement;
export default LanReflectBoth;
