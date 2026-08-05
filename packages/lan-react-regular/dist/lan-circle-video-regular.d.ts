import React from 'react';

export interface LanCircleVideoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVideoRegular(props: LanCircleVideoRegularProps): React.ReactElement;
export default LanCircleVideoRegular;
