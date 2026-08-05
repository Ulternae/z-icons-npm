import React from 'react';

export interface LanHammerWarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerWarThin(props: LanHammerWarThinProps): React.ReactElement;
export default LanHammerWarThin;
