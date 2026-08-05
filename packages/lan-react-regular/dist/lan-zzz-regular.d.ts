import React from 'react';

export interface LanZzzRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZzzRegular(props: LanZzzRegularProps): React.ReactElement;
export default LanZzzRegular;
