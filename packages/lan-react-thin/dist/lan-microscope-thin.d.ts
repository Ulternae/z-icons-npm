import React from 'react';

export interface LanMicroscopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicroscopeThin(props: LanMicroscopeThinProps): React.ReactElement;
export default LanMicroscopeThin;
