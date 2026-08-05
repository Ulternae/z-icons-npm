import React from 'react';

export interface LanDogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogRegular(props: LanDogRegularProps): React.ReactElement;
export default LanDogRegular;
