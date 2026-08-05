import React from 'react';

export interface LanWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWSolid(props: LanWSolidProps): React.ReactElement;
export default LanWSolid;
