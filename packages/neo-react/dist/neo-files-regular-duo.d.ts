import React from 'react';

export interface NeoFilesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFilesRegularDuo(props: NeoFilesRegularDuoProps): React.ReactElement;
export default NeoFilesRegularDuo;
