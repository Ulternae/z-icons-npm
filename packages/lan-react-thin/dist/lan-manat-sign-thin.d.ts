import React from 'react';

export interface LanManatSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManatSignThin(props: LanManatSignThinProps): React.ReactElement;
export default LanManatSignThin;
