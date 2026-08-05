import React from 'react';

export interface LanCirclesOverlapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclesOverlapRegular(props: LanCirclesOverlapRegularProps): React.ReactElement;
export default LanCirclesOverlapRegular;
