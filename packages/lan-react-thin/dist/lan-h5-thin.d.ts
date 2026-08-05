import React from 'react';

export interface LanH5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH5Thin(props: LanH5ThinProps): React.ReactElement;
export default LanH5Thin;
