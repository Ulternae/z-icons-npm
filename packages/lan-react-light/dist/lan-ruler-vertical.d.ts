import React from 'react';

export interface LanRulerVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerVertical(props: LanRulerVerticalProps): React.ReactElement;
export default LanRulerVertical;
