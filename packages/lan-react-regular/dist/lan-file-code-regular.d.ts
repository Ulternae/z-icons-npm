import React from 'react';

export interface LanFileCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCodeRegular(props: LanFileCodeRegularProps): React.ReactElement;
export default LanFileCodeRegular;
