import React from 'react';

export interface LanExcavatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExcavatorRegular(props: LanExcavatorRegularProps): React.ReactElement;
export default LanExcavatorRegular;
