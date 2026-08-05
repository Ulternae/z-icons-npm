import React from 'react';

export interface LanJeansProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeans(props: LanJeansProps): React.ReactElement;
export default LanJeans;
