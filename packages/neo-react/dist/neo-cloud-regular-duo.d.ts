import React from 'react';

export interface NeoCloudRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCloudRegularDuo(props: NeoCloudRegularDuoProps): React.ReactElement;
export default NeoCloudRegularDuo;
