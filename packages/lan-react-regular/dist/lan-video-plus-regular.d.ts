import React from 'react';

export interface LanVideoPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoPlusRegular(props: LanVideoPlusRegularProps): React.ReactElement;
export default LanVideoPlusRegular;
