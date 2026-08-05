import React from 'react';

export interface MinaWindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWind(props: MinaWindProps): React.ReactElement;
export default MinaWind;
