import React from 'react';

export interface LanCouchSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchSmallThin(props: LanCouchSmallThinProps): React.ReactElement;
export default LanCouchSmallThin;
