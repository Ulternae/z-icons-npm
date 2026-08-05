import React from 'react';

export interface LanSwedishKronaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwedishKronaSign(props: LanSwedishKronaSignProps): React.ReactElement;
export default LanSwedishKronaSign;
