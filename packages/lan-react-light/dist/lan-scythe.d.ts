import React from 'react';

export interface LanScytheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScythe(props: LanScytheProps): React.ReactElement;
export default LanScythe;
