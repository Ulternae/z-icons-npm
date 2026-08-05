import React from 'react';

export interface NeoFlowerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFlowerRegularDuo(props: NeoFlowerRegularDuoProps): React.ReactElement;
export default NeoFlowerRegularDuo;
