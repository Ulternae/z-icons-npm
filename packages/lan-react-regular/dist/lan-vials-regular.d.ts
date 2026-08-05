import React from 'react';

export interface LanVialsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialsRegular(props: LanVialsRegularProps): React.ReactElement;
export default LanVialsRegular;
