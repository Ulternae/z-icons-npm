import React from 'react';

export interface LanShieldVirusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldVirusThin(props: LanShieldVirusThinProps): React.ReactElement;
export default LanShieldVirusThin;
