import React from 'react';

export interface LanFlagUsaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagUsaRegular(props: LanFlagUsaRegularProps): React.ReactElement;
export default LanFlagUsaRegular;
