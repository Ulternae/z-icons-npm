import React from 'react';

export interface LanSquareDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDRegular(props: LanSquareDRegularProps): React.ReactElement;
export default LanSquareDRegular;
