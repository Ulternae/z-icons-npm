import React from 'react';

export interface LanPepperHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperHot(props: LanPepperHotProps): React.ReactElement;
export default LanPepperHot;
