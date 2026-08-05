import React from 'react';

export interface LanAlicornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlicornRegular(props: LanAlicornRegularProps): React.ReactElement;
export default LanAlicornRegular;
