import React from 'react';

export interface LanFootWingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootWingThin(props: LanFootWingThinProps): React.ReactElement;
export default LanFootWingThin;
