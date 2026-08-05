import React from 'react';

export interface LanCouchSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchSmallSolid(props: LanCouchSmallSolidProps): React.ReactElement;
export default LanCouchSmallSolid;
