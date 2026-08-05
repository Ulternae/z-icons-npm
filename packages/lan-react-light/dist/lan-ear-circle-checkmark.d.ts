import React from 'react';

export interface LanEarCircleCheckmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarCircleCheckmark(props: LanEarCircleCheckmarkProps): React.ReactElement;
export default LanEarCircleCheckmark;
