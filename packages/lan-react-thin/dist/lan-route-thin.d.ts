import React from 'react';

export interface LanRouteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRouteThin(props: LanRouteThinProps): React.ReactElement;
export default LanRouteThin;
