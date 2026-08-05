import React from 'react';

export interface NeoWrenchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWrenchRegularDuo(props: NeoWrenchRegularDuoProps): React.ReactElement;
export default NeoWrenchRegularDuo;
