import React from 'react';

export interface LanTentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentsSolid(props: LanTentsSolidProps): React.ReactElement;
export default LanTentsSolid;
