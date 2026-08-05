import React from 'react';

export interface LanOliveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveThin(props: LanOliveThinProps): React.ReactElement;
export default LanOliveThin;
