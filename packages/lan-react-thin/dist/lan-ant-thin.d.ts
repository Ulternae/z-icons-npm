import React from 'react';

export interface LanAntThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAntThin(props: LanAntThinProps): React.ReactElement;
export default LanAntThin;
