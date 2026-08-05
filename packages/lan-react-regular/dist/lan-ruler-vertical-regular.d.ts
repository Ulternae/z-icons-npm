import React from 'react';

export interface LanRulerVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerVerticalRegular(props: LanRulerVerticalRegularProps): React.ReactElement;
export default LanRulerVerticalRegular;
