import React from 'react';

export interface LanFaceFrownSlightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrownSlight(props: LanFaceFrownSlightProps): React.ReactElement;
export default LanFaceFrownSlight;
