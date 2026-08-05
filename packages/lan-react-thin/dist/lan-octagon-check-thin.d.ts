import React from 'react';

export interface LanOctagonCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonCheckThin(props: LanOctagonCheckThinProps): React.ReactElement;
export default LanOctagonCheckThin;
