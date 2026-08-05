import React from 'react';

export interface LanBooksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksSolid(props: LanBooksSolidProps): React.ReactElement;
export default LanBooksSolid;
