import React from 'react';

export interface LanCouchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCouchThin(props: LanCouchThinProps): React.ReactElement;
export default LanCouchThin;
