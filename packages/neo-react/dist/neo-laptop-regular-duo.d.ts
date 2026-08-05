import React from 'react';

export interface NeoLaptopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLaptopRegularDuo(props: NeoLaptopRegularDuoProps): React.ReactElement;
export default NeoLaptopRegularDuo;
