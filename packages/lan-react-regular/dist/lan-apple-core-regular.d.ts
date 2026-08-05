import React from 'react';

export interface LanAppleCoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCoreRegular(props: LanAppleCoreRegularProps): React.ReactElement;
export default LanAppleCoreRegular;
