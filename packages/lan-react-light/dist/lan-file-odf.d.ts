import React from 'react';

export interface LanFileOdfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileOdf(props: LanFileOdfProps): React.ReactElement;
export default LanFileOdf;
