import React from 'react';

export interface LanSealThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealThin(props: LanSealThinProps): React.ReactElement;
export default LanSealThin;
