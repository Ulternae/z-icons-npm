import React from 'react';

export interface LanCodeSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeSimpleRegular(props: LanCodeSimpleRegularProps): React.ReactElement;
export default LanCodeSimpleRegular;
