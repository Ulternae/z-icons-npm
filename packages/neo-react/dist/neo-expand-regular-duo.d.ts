import React from 'react';

export interface NeoExpandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoExpandRegularDuo(props: NeoExpandRegularDuoProps): React.ReactElement;
export default NeoExpandRegularDuo;
