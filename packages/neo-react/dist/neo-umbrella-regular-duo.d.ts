import React from 'react';

export interface NeoUmbrellaRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUmbrellaRegularDuo(props: NeoUmbrellaRegularDuoProps): React.ReactElement;
export default NeoUmbrellaRegularDuo;
