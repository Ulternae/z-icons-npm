import React from 'react';

export interface LanHamsaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHamsaThin(props: LanHamsaThinProps): React.ReactElement;
export default LanHamsaThin;
