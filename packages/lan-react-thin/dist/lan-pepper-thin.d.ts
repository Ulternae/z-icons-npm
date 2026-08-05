import React from 'react';

export interface LanPepperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperThin(props: LanPepperThinProps): React.ReactElement;
export default LanPepperThin;
