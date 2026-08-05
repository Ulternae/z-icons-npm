import React from 'react';

export interface LanMeterBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterBoltSolid(props: LanMeterBoltSolidProps): React.ReactElement;
export default LanMeterBoltSolid;
