import React from 'react';

export interface LanKnifeKitchenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKnifeKitchenSolid(props: LanKnifeKitchenSolidProps): React.ReactElement;
export default LanKnifeKitchenSolid;
