import React from 'react';

export interface LanDisplayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayRegular(props: LanDisplayRegularProps): React.ReactElement;
export default LanDisplayRegular;
