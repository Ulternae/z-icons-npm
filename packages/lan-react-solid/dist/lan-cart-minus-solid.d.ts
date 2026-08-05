import React from 'react';

export interface LanCartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartMinusSolid(props: LanCartMinusSolidProps): React.ReactElement;
export default LanCartMinusSolid;
