import React from 'react';

export interface LanDnaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDnaThin(props: LanDnaThinProps): React.ReactElement;
export default LanDnaThin;
