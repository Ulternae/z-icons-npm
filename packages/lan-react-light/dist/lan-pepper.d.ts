import React from 'react';

export interface LanPepperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepper(props: LanPepperProps): React.ReactElement;
export default LanPepper;
