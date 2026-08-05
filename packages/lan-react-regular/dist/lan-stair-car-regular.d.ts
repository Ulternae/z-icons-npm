import React from 'react';

export interface LanStairCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairCarRegular(props: LanStairCarRegularProps): React.ReactElement;
export default LanStairCarRegular;
