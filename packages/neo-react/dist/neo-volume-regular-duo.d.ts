import React from 'react';

export interface NeoVolumeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeRegularDuo(props: NeoVolumeRegularDuoProps): React.ReactElement;
export default NeoVolumeRegularDuo;
