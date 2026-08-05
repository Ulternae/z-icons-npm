import React from 'react';

export interface LanUserAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAlt(props: LanUserAltProps): React.ReactElement;
export default LanUserAlt;
