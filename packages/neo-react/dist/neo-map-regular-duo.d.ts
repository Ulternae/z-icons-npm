import React from 'react';

export interface NeoMapRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMapRegularDuo(props: NeoMapRegularDuoProps): React.ReactElement;
export default NeoMapRegularDuo;
