import React from 'react';

export interface LanShieldMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldMinusSolid(props: LanShieldMinusSolidProps): React.ReactElement;
export default LanShieldMinusSolid;
