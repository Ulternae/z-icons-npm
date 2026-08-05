import React from 'react';

export interface LanEnvelopeDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeDotSolid(props: LanEnvelopeDotSolidProps): React.ReactElement;
export default LanEnvelopeDotSolid;
