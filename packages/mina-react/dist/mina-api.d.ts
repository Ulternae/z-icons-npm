import React from 'react';

export interface MinaApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaApi(props: MinaApiProps): React.ReactElement;
export default MinaApi;
