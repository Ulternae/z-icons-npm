import React from 'react';

export interface LanDittoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDitto(props: LanDittoProps): React.ReactElement;
export default LanDitto;
