import React from 'react';

export interface LanTaurusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaurusSolid(props: LanTaurusSolidProps): React.ReactElement;
export default LanTaurusSolid;
