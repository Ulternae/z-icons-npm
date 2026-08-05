import React from 'react';

export interface LanHippoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHippoThin(props: LanHippoThinProps): React.ReactElement;
export default LanHippoThin;
