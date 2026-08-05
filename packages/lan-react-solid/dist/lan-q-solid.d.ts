import React from 'react';

export interface LanQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQSolid(props: LanQSolidProps): React.ReactElement;
export default LanQSolid;
