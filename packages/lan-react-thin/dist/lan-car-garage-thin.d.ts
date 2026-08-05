import React from 'react';

export interface LanCarGarageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarGarageThin(props: LanCarGarageThinProps): React.ReactElement;
export default LanCarGarageThin;
