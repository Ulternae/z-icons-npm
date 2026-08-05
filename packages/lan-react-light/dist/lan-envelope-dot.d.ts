import React from 'react';

export interface LanEnvelopeDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeDot(props: LanEnvelopeDotProps): React.ReactElement;
export default LanEnvelopeDot;
