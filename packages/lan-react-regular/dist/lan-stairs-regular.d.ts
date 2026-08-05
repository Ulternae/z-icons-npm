import React from 'react';

export interface LanStairsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairsRegular(props: LanStairsRegularProps): React.ReactElement;
export default LanStairsRegular;
