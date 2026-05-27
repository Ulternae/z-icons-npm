import React from 'react';

export interface NeoInboxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoInboxRegularDuo: React.FC<NeoInboxRegularDuoProps>;
export default NeoInboxRegularDuo;
