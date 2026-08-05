import React from 'react';

export interface LanElephantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElephantThin(props: LanElephantThinProps): React.ReactElement;
export default LanElephantThin;
