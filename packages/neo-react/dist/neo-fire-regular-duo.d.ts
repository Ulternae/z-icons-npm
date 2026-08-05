import React from 'react';

export interface NeoFireRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFireRegularDuo(props: NeoFireRegularDuoProps): React.ReactElement;
export default NeoFireRegularDuo;
