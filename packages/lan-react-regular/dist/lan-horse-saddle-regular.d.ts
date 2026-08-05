import React from 'react';

export interface LanHorseSaddleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseSaddleRegular(props: LanHorseSaddleRegularProps): React.ReactElement;
export default LanHorseSaddleRegular;
