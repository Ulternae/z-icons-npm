import React from 'react';

export interface LanMessageSmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageSmsSolid(props: LanMessageSmsSolidProps): React.ReactElement;
export default LanMessageSmsSolid;
