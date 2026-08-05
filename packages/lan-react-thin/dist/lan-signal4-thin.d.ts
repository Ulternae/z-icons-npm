import React from 'react';

export interface LanSignal4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal4Thin(props: LanSignal4ThinProps): React.ReactElement;
export default LanSignal4Thin;
