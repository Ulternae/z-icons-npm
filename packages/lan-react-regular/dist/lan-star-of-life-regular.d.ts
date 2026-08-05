import React from 'react';

export interface LanStarOfLifeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarOfLifeRegular(props: LanStarOfLifeRegularProps): React.ReactElement;
export default LanStarOfLifeRegular;
