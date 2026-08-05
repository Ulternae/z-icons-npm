import React from 'react';

export interface LanMapSignsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapSignsRegular(props: LanMapSignsRegularProps): React.ReactElement;
export default LanMapSignsRegular;
