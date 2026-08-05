import React from 'react';

export interface LanCouchSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchSmall(props: LanCouchSmallProps): React.ReactElement;
export default LanCouchSmall;
