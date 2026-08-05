import React from 'react';

export interface LanFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlower(props: LanFlowerProps): React.ReactElement;
export default LanFlower;
