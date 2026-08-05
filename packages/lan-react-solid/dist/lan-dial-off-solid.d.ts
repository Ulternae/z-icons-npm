import React from 'react';

export interface LanDialOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialOffSolid(props: LanDialOffSolidProps): React.ReactElement;
export default LanDialOffSolid;
