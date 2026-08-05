import React from 'react';

export interface LanTransducerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransducer(props: LanTransducerProps): React.ReactElement;
export default LanTransducer;
