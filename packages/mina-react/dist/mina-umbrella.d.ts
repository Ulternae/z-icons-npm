import React from 'react';

export interface MinaUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUmbrella(props: MinaUmbrellaProps): React.ReactElement;
export default MinaUmbrella;
