import React from 'react';

export interface LanMakiRollThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMakiRollThin(props: LanMakiRollThinProps): React.ReactElement;
export default LanMakiRollThin;
