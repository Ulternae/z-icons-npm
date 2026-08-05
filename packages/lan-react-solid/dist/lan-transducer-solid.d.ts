import React from 'react';

export interface LanTransducerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransducerSolid(props: LanTransducerSolidProps): React.ReactElement;
export default LanTransducerSolid;
