import React from 'react';

export interface LanListCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListCheckSolid(props: LanListCheckSolidProps): React.ReactElement;
export default LanListCheckSolid;
