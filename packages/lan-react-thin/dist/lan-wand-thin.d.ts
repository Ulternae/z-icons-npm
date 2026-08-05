import React from 'react';

export interface LanWandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandThin(props: LanWandThinProps): React.ReactElement;
export default LanWandThin;
