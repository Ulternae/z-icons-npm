import React from 'react';

export interface MinaWineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWine(props: MinaWineProps): React.ReactElement;
export default MinaWine;
