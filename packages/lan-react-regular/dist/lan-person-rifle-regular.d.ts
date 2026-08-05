import React from 'react';

export interface LanPersonRifleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRifleRegular(props: LanPersonRifleRegularProps): React.ReactElement;
export default LanPersonRifleRegular;
