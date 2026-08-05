import React from 'react';

export interface LanH2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH2Thin(props: LanH2ThinProps): React.ReactElement;
export default LanH2Thin;
