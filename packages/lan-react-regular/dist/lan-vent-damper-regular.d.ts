import React from 'react';

export interface LanVentDamperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVentDamperRegular(props: LanVentDamperRegularProps): React.ReactElement;
export default LanVentDamperRegular;
