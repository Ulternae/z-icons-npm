import React from 'react';

export interface LanH4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH4Thin(props: LanH4ThinProps): React.ReactElement;
export default LanH4Thin;
