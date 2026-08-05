import React from 'react';

export interface LanBlockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockThin(props: LanBlockThinProps): React.ReactElement;
export default LanBlockThin;
