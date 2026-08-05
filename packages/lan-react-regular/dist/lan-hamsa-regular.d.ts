import React from 'react';

export interface LanHamsaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHamsaRegular(props: LanHamsaRegularProps): React.ReactElement;
export default LanHamsaRegular;
