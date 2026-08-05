import React from 'react';

export interface LanJarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJarRegular(props: LanJarRegularProps): React.ReactElement;
export default LanJarRegular;
