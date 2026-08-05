import React from 'react';

export interface NeoFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFlower(props: NeoFlowerProps): React.ReactElement;
export default NeoFlower;
