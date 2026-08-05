import React from 'react';

export interface LanVentDamperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVentDamperThin(props: LanVentDamperThinProps): React.ReactElement;
export default LanVentDamperThin;
