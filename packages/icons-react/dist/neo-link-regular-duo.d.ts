import React from 'react';

export interface NeoLinkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLinkRegularDuo: React.FC<NeoLinkRegularDuoProps>;
export default NeoLinkRegularDuo;
