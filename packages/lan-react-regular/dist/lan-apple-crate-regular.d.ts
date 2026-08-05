import React from 'react';

export interface LanAppleCrateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCrateRegular(props: LanAppleCrateRegularProps): React.ReactElement;
export default LanAppleCrateRegular;
