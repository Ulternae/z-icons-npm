import React from 'react';

export interface LanCupStrawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawThin(props: LanCupStrawThinProps): React.ReactElement;
export default LanCupStrawThin;
