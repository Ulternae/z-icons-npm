import React from 'react';

export interface NeoAtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAtRegularDuo(props: NeoAtRegularDuoProps): React.ReactElement;
export default NeoAtRegularDuo;
