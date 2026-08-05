import React from 'react';

export interface LanGrid4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid4Thin(props: LanGrid4ThinProps): React.ReactElement;
export default LanGrid4Thin;
