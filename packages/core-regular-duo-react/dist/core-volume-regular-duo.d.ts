import React from 'react';

export interface CoreVolumeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeRegularDuo(props: CoreVolumeRegularDuoProps): React.ReactElement;
export default CoreVolumeRegularDuo;
