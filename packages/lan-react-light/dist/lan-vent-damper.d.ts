import React from 'react';

export interface LanVentDamperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVentDamper(props: LanVentDamperProps): React.ReactElement;
export default LanVentDamper;
