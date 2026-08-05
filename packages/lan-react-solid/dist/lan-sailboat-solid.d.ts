import React from 'react';

export interface LanSailboatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSailboatSolid(props: LanSailboatSolidProps): React.ReactElement;
export default LanSailboatSolid;
