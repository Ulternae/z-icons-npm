import React from 'react';

export interface CoreInboxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreInboxRegularDuo: React.FC<CoreInboxRegularDuoProps>;
export default CoreInboxRegularDuo;
