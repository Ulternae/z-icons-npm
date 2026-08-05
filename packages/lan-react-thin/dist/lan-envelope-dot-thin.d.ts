import React from 'react';

export interface LanEnvelopeDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeDotThin(props: LanEnvelopeDotThinProps): React.ReactElement;
export default LanEnvelopeDotThin;
