import React from 'react';

export interface LanCauldronThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCauldronThin(props: LanCauldronThinProps): React.ReactElement;
export default LanCauldronThin;
