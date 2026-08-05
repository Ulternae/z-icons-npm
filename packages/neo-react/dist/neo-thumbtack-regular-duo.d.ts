import React from 'react';

export interface NeoThumbtackRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbtackRegularDuo(props: NeoThumbtackRegularDuoProps): React.ReactElement;
export default NeoThumbtackRegularDuo;
