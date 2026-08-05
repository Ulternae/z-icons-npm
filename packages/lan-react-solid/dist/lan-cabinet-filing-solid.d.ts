import React from 'react';

export interface LanCabinetFilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabinetFilingSolid(props: LanCabinetFilingSolidProps): React.ReactElement;
export default LanCabinetFilingSolid;
