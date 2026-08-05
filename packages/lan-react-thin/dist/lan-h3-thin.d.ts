import React from 'react';

export interface LanH3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH3Thin(props: LanH3ThinProps): React.ReactElement;
export default LanH3Thin;
