import React from 'react';

export interface LanCutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutThin(props: LanCutThinProps): React.ReactElement;
export default LanCutThin;
