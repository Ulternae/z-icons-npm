import React from 'react';

export interface LanTentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentThin(props: LanTentThinProps): React.ReactElement;
export default LanTentThin;
