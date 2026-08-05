import React from 'react';

export interface LanHomeLgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeLg(props: LanHomeLgProps): React.ReactElement;
export default LanHomeLg;
