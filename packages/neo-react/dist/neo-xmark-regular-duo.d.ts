import React from 'react';

export interface NeoXmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoXmarkRegularDuo(props: NeoXmarkRegularDuoProps): React.ReactElement;
export default NeoXmarkRegularDuo;
