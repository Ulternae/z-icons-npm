import React from 'react';

export interface LanBookOpenLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenLinesSolid(props: LanBookOpenLinesSolidProps): React.ReactElement;
export default LanBookOpenLinesSolid;
