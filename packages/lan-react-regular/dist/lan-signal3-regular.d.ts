import React from 'react';

export interface LanSignal3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal3Regular(props: LanSignal3RegularProps): React.ReactElement;
export default LanSignal3Regular;
