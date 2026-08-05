import React from 'react';

export interface LanShrimpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShrimpThin(props: LanShrimpThinProps): React.ReactElement;
export default LanShrimpThin;
