import React from 'react';

export interface LanGrid5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid5Thin(props: LanGrid5ThinProps): React.ReactElement;
export default LanGrid5Thin;
