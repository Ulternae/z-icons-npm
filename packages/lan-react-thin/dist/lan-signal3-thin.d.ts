import React from 'react';

export interface LanSignal3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal3Thin(props: LanSignal3ThinProps): React.ReactElement;
export default LanSignal3Thin;
