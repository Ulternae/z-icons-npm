import React from 'react';

export interface LanDaggerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDagger(props: LanDaggerProps): React.ReactElement;
export default LanDagger;
