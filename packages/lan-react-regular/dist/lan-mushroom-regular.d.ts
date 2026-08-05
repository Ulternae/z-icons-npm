import React from 'react';

export interface LanMushroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMushroomRegular(props: LanMushroomRegularProps): React.ReactElement;
export default LanMushroomRegular;
