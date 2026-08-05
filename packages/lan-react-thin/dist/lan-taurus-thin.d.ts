import React from 'react';

export interface LanTaurusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaurusThin(props: LanTaurusThinProps): React.ReactElement;
export default LanTaurusThin;
