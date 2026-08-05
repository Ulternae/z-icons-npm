import React from 'react';

export interface LanViolinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViolinRegular(props: LanViolinRegularProps): React.ReactElement;
export default LanViolinRegular;
