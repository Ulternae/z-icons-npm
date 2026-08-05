import React from 'react';

export interface LanTransporterEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterEmptySolid(props: LanTransporterEmptySolidProps): React.ReactElement;
export default LanTransporterEmptySolid;
