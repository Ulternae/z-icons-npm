import React from 'react';

export interface LanCircleERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleERegular(props: LanCircleERegularProps): React.ReactElement;
export default LanCircleERegular;
