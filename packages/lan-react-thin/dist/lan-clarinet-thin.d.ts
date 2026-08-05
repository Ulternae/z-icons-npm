import React from 'react';

export interface LanClarinetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClarinetThin(props: LanClarinetThinProps): React.ReactElement;
export default LanClarinetThin;
