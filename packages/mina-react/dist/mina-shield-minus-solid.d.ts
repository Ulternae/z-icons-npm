import React from 'react';

export interface MinaShieldMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShieldMinusSolid(props: MinaShieldMinusSolidProps): React.ReactElement;
export default MinaShieldMinusSolid;
