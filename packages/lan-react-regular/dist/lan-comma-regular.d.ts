import React from 'react';

export interface LanCommaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommaRegular(props: LanCommaRegularProps): React.ReactElement;
export default LanCommaRegular;
