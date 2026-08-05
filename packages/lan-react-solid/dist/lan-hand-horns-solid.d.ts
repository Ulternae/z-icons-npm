import React from 'react';

export interface LanHandHornsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHornsSolid(props: LanHandHornsSolidProps): React.ReactElement;
export default LanHandHornsSolid;
