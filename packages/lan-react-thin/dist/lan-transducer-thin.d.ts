import React from 'react';

export interface LanTransducerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransducerThin(props: LanTransducerThinProps): React.ReactElement;
export default LanTransducerThin;
