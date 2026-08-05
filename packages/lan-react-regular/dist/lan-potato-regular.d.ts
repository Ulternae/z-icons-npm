import React from 'react';

export interface LanPotatoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotatoRegular(props: LanPotatoRegularProps): React.ReactElement;
export default LanPotatoRegular;
