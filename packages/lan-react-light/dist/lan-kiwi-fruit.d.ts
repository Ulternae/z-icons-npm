import React from 'react';

export interface LanKiwiFruitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiFruit(props: LanKiwiFruitProps): React.ReactElement;
export default LanKiwiFruit;
