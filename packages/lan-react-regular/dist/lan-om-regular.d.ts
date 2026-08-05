import React from 'react';

export interface LanOmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmRegular(props: LanOmRegularProps): React.ReactElement;
export default LanOmRegular;
