import React from 'react';

export interface LanAppleCrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCrate(props: LanAppleCrateProps): React.ReactElement;
export default LanAppleCrate;
