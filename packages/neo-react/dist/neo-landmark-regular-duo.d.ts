import React from 'react';

export interface NeoLandmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLandmarkRegularDuo(props: NeoLandmarkRegularDuoProps): React.ReactElement;
export default NeoLandmarkRegularDuo;
