import React from 'react';

export interface LanPersonDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressRegular(props: LanPersonDressRegularProps): React.ReactElement;
export default LanPersonDressRegular;
