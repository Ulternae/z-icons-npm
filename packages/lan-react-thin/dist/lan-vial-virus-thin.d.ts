import React from 'react';

export interface LanVialVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVirusThin(props: LanVialVirusThinProps): React.ReactElement;
export default LanVialVirusThin;
