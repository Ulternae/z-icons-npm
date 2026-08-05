import React from 'react';

export interface LanStomachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStomachRegular(props: LanStomachRegularProps): React.ReactElement;
export default LanStomachRegular;
