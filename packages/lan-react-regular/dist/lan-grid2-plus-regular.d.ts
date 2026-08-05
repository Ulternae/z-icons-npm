import React from 'react';

export interface LanGrid2PlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2PlusRegular(props: LanGrid2PlusRegularProps): React.ReactElement;
export default LanGrid2PlusRegular;
