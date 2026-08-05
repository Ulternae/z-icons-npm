import React from 'react';

export interface LanCouchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchSolid(props: LanCouchSolidProps): React.ReactElement;
export default LanCouchSolid;
