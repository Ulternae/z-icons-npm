import React from 'react';

export interface LanLeafyGreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafyGreen(props: LanLeafyGreenProps): React.ReactElement;
export default LanLeafyGreen;
