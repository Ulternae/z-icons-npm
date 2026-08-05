import React from 'react';

export interface LanCogsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogsSolid(props: LanCogsSolidProps): React.ReactElement;
export default LanCogsSolid;
