import React from 'react';

export interface LanPepperHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPepperHotSolid(props: LanPepperHotSolidProps): React.ReactElement;
export default LanPepperHotSolid;
