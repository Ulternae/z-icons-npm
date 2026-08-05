import React from 'react';

export interface LanFaceFrownOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrownOpen(props: LanFaceFrownOpenProps): React.ReactElement;
export default LanFaceFrownOpen;
