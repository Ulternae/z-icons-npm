import React from 'react';

export interface LanASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanASolid(props: LanASolidProps): React.ReactElement;
export default LanASolid;
