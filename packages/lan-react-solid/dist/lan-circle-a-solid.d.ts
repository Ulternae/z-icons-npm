import React from 'react';

export interface LanCircleASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleASolid(props: LanCircleASolidProps): React.ReactElement;
export default LanCircleASolid;
