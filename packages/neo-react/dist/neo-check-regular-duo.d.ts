import React from 'react';

export interface NeoCheckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCheckRegularDuo(props: NeoCheckRegularDuoProps): React.ReactElement;
export default NeoCheckRegularDuo;
