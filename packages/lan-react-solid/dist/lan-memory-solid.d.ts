import React from 'react';

export interface LanMemorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemorySolid(props: LanMemorySolidProps): React.ReactElement;
export default LanMemorySolid;
