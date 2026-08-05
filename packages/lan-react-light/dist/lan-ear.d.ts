import React from 'react';

export interface LanEarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEar(props: LanEarProps): React.ReactElement;
export default LanEar;
