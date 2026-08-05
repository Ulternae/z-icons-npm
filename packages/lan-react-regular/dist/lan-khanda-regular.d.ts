import React from 'react';

export interface LanKhandaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKhandaRegular(props: LanKhandaRegularProps): React.ReactElement;
export default LanKhandaRegular;
