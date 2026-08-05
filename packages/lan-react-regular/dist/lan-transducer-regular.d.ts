import React from 'react';

export interface LanTransducerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransducerRegular(props: LanTransducerRegularProps): React.ReactElement;
export default LanTransducerRegular;
