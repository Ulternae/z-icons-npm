import React from 'react';

export interface LanGarageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageThin(props: LanGarageThinProps): React.ReactElement;
export default LanGarageThin;
