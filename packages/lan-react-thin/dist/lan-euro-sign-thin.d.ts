import React from 'react';

export interface LanEuroSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEuroSignThin(props: LanEuroSignThinProps): React.ReactElement;
export default LanEuroSignThin;
