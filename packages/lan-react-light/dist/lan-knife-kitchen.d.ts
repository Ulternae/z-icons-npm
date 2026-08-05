import React from 'react';

export interface LanKnifeKitchenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKnifeKitchen(props: LanKnifeKitchenProps): React.ReactElement;
export default LanKnifeKitchen;
