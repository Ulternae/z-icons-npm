import React from 'react';

export interface LanH1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH1Thin(props: LanH1ThinProps): React.ReactElement;
export default LanH1Thin;
