import React from 'react';

export interface LanFileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileRegular(props: LanFileRegularProps): React.ReactElement;
export default LanFileRegular;
