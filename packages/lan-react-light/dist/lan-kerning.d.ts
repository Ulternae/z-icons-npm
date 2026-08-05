import React from 'react';

export interface LanKerningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKerning(props: LanKerningProps): React.ReactElement;
export default LanKerning;
