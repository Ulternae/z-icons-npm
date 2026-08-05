import React from 'react';

export interface NeoAnchorRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAnchorRegularDuo(props: NeoAnchorRegularDuoProps): React.ReactElement;
export default NeoAnchorRegularDuo;
