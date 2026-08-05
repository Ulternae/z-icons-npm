import React from 'react';

export interface LanCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBoltRegular(props: LanCircleBoltRegularProps): React.ReactElement;
export default LanCircleBoltRegular;
