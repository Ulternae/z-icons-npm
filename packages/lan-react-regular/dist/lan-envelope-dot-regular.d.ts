import React from 'react';

export interface LanEnvelopeDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeDotRegular(props: LanEnvelopeDotRegularProps): React.ReactElement;
export default LanEnvelopeDotRegular;
