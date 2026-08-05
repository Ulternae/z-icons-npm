import React from 'react';

export interface LanSwapArrowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwapArrows(props: LanSwapArrowsProps): React.ReactElement;
export default LanSwapArrows;
