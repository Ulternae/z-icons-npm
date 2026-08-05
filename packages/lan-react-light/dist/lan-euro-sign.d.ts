import React from 'react';

export interface LanEuroSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEuroSign(props: LanEuroSignProps): React.ReactElement;
export default LanEuroSign;
