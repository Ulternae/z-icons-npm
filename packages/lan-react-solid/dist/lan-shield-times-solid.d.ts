import React from 'react';

export interface LanShieldTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldTimesSolid(props: LanShieldTimesSolidProps): React.ReactElement;
export default LanShieldTimesSolid;
