import React from 'react';

export interface LanTamaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTamaleThin(props: LanTamaleThinProps): React.ReactElement;
export default LanTamaleThin;
