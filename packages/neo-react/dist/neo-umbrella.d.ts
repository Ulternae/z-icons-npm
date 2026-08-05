import React from 'react';

export interface NeoUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUmbrella(props: NeoUmbrellaProps): React.ReactElement;
export default NeoUmbrella;
