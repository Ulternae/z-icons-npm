import React from 'react';

export interface LanCarWrenchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWrenchRegular(props: LanCarWrenchRegularProps): React.ReactElement;
export default LanCarWrenchRegular;
