import React from 'react';

export interface LanCogsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogsRegular(props: LanCogsRegularProps): React.ReactElement;
export default LanCogsRegular;
