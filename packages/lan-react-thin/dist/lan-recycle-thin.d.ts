import React from 'react';

export interface LanRecycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecycleThin(props: LanRecycleThinProps): React.ReactElement;
export default LanRecycleThin;
