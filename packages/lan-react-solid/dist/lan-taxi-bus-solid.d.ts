import React from 'react';

export interface LanTaxiBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaxiBusSolid(props: LanTaxiBusSolidProps): React.ReactElement;
export default LanTaxiBusSolid;
