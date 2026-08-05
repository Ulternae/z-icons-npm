import React from 'react';

export interface LanH6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH6Solid(props: LanH6SolidProps): React.ReactElement;
export default LanH6Solid;
