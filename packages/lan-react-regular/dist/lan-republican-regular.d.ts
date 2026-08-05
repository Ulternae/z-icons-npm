import React from 'react';

export interface LanRepublicanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepublicanRegular(props: LanRepublicanRegularProps): React.ReactElement;
export default LanRepublicanRegular;
