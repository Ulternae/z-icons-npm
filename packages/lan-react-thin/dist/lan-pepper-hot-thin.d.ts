import React from 'react';

export interface LanPepperHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperHotThin(props: LanPepperHotThinProps): React.ReactElement;
export default LanPepperHotThin;
