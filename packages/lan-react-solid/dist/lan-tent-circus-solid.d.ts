import React from 'react';

export interface LanTentCircusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentCircusSolid(props: LanTentCircusSolidProps): React.ReactElement;
export default LanTentCircusSolid;
