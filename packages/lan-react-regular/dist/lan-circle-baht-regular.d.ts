import React from 'react';

export interface LanCircleBahtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBahtRegular(props: LanCircleBahtRegularProps): React.ReactElement;
export default LanCircleBahtRegular;
