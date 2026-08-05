import React from 'react';

export interface LanAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAThin(props: LanAThinProps): React.ReactElement;
export default LanAThin;
