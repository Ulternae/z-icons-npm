import React from 'react';

export interface LanWaffleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaffleRegular(props: LanWaffleRegularProps): React.ReactElement;
export default LanWaffleRegular;
