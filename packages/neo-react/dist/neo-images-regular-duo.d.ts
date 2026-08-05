import React from 'react';

export interface NeoImagesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImagesRegularDuo(props: NeoImagesRegularDuoProps): React.ReactElement;
export default NeoImagesRegularDuo;
