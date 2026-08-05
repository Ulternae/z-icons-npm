import React from 'react';

export interface LanKitchenSetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKitchenSetSolid(props: LanKitchenSetSolidProps): React.ReactElement;
export default LanKitchenSetSolid;
