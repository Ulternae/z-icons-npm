import React from 'react';

export interface LanReflectBothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReflectBothRegular(props: LanReflectBothRegularProps): React.ReactElement;
export default LanReflectBothRegular;
