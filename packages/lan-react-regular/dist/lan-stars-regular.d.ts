import React from 'react';

export interface LanStarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarsRegular(props: LanStarsRegularProps): React.ReactElement;
export default LanStarsRegular;
