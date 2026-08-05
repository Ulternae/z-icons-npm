import React from 'react';

export interface LanAppleCoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCore(props: LanAppleCoreProps): React.ReactElement;
export default LanAppleCore;
