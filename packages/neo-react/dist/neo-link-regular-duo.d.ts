import React from 'react';

export interface NeoLinkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLinkRegularDuo(props: NeoLinkRegularDuoProps): React.ReactElement;
export default NeoLinkRegularDuo;
