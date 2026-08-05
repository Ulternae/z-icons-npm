import React from 'react';

export interface LanTreesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreesRegular(props: LanTreesRegularProps): React.ReactElement;
export default LanTreesRegular;
