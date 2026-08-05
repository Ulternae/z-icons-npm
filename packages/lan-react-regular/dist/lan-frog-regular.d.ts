import React from 'react';

export interface LanFrogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrogRegular(props: LanFrogRegularProps): React.ReactElement;
export default LanFrogRegular;
