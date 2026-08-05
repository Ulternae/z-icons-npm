import React from 'react';

export interface LanWagonCoveredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWagonCoveredRegular(props: LanWagonCoveredRegularProps): React.ReactElement;
export default LanWagonCoveredRegular;
