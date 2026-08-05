import React from 'react';

export interface LanCoffinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinThin(props: LanCoffinThinProps): React.ReactElement;
export default LanCoffinThin;
