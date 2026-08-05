import React from 'react';

export interface LanCircleLiraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLiraSolid(props: LanCircleLiraSolidProps): React.ReactElement;
export default LanCircleLiraSolid;
