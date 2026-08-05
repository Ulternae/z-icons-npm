import React from 'react';

export interface LanJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJRegular(props: LanJRegularProps): React.ReactElement;
export default LanJRegular;
