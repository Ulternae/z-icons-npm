import React from 'react';

export interface NeoCloneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCloneRegularDuo(props: NeoCloneRegularDuoProps): React.ReactElement;
export default NeoCloneRegularDuo;
