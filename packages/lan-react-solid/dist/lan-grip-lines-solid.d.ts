import React from 'react';

export interface LanGripLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGripLinesSolid(props: LanGripLinesSolidProps): React.ReactElement;
export default LanGripLinesSolid;
