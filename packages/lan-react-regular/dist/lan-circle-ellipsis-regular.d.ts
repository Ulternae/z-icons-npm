import React from 'react';

export interface LanCircleEllipsisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEllipsisRegular(props: LanCircleEllipsisRegularProps): React.ReactElement;
export default LanCircleEllipsisRegular;
