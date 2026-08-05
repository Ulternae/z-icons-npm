import React from 'react';

export interface LanCircleShekelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShekelRegular(props: LanCircleShekelRegularProps): React.ReactElement;
export default LanCircleShekelRegular;
