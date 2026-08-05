import React from 'react';

export interface LanVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusThin(props: LanVirusThinProps): React.ReactElement;
export default LanVirusThin;
