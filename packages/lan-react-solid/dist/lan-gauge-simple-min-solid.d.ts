import React from 'react';

export interface LanGaugeSimpleMinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMinSolid(props: LanGaugeSimpleMinSolidProps): React.ReactElement;
export default LanGaugeSimpleMinSolid;
