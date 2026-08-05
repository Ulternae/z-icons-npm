import React from 'react';

export interface LanHouseTsunamiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTsunamiRegular(props: LanHouseTsunamiRegularProps): React.ReactElement;
export default LanHouseTsunamiRegular;
