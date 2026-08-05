import React from 'react';

export interface LanOctagonXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonXmarkRegular(props: LanOctagonXmarkRegularProps): React.ReactElement;
export default LanOctagonXmarkRegular;
