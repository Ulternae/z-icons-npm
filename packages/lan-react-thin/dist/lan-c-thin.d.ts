import React from 'react';

export interface LanCThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCThin(props: LanCThinProps): React.ReactElement;
export default LanCThin;
