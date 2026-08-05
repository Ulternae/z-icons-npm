import React from 'react';

export interface LanDialHighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialHighRegular(props: LanDialHighRegularProps): React.ReactElement;
export default LanDialHighRegular;
