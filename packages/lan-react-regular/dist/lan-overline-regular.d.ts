import React from 'react';

export interface LanOverlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOverlineRegular(props: LanOverlineRegularProps): React.ReactElement;
export default LanOverlineRegular;
