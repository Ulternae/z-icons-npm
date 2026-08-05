import React from 'react';

export interface LanCircleCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCSolid(props: LanCircleCSolidProps): React.ReactElement;
export default LanCircleCSolid;
