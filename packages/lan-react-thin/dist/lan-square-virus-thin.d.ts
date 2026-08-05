import React from 'react';

export interface LanSquareVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVirusThin(props: LanSquareVirusThinProps): React.ReactElement;
export default LanSquareVirusThin;
