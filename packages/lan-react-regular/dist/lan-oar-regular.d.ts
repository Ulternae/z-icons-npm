import React from 'react';

export interface LanOarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarRegular(props: LanOarRegularProps): React.ReactElement;
export default LanOarRegular;
