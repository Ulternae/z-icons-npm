import React from 'react';

export interface MinaApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaApi: React.FC<MinaApiProps>;
export default MinaApi;
