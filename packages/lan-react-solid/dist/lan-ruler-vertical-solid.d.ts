import React from 'react';

export interface LanRulerVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerVerticalSolid(props: LanRulerVerticalSolidProps): React.ReactElement;
export default LanRulerVerticalSolid;
