import React from 'react';

export interface LanSquareDongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDongRegular(props: LanSquareDongRegularProps): React.ReactElement;
export default LanSquareDongRegular;
